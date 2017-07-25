/* eslint-env jest */
import { classify, purify } from '../decorators';

describe('utils decorators', () => {
    describe('purify', () => {
        let count = 0;
        const Child = purify(props => <div { ...props }>{ count++ }</div>);
        const wrapper = mount(<Child data-test="foo"/>);

        it('check render', () => {
            expect(wrapper.html()).toBe('<div data-test="foo">0</div>');
        });

        it('check update', () => {
            wrapper.setProps({ 'data-test': 'bar' });
            expect(wrapper.html()).toBe('<div data-test="bar">1</div>');
        });

        it('skip re-render', () => {
            wrapper.setProps({ 'data-test': 'bar' });
            expect(wrapper.html()).toBe('<div data-test="bar">1</div>');
        });
    });

    describe('classify', () => {
        it('none classes in root component with default', () => {
            const Test = classify();
            const wrapper = shallow(<Test/>);

            expect(wrapper.type()).toBe('div');
            expect(wrapper.prop('className')).toBe('');
        });

        it('class in root component from carrying string', () => {
            const Test = classify('foo');
            const wrapper = shallow(<Test/>);

            expect(wrapper.type()).toBe('div');
            expect(wrapper.prop('className')).toBe('foo');
        });

        it('class in root component from props array', () => {
            const Test = classify();
            const wrapper = shallow(<Test className={ ['foo'] }/>);

            expect(wrapper.type()).toBe('div');
            expect(wrapper.prop('className')).toBe('foo');
        });

        it('two classes in root component from carrying array and props string', () => {
            const Test = classify(['foo']);
            const wrapper = shallow(<Test className="bar"/>);

            expect(wrapper.type()).toBe('div');
            expect(wrapper.prop('className')).toBe('foo bar');
        });
    });
});
