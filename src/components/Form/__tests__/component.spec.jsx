/* eslint-env mocha */
import { expect } from 'chai';
import { spy } from 'sinon';
import { shallow, mount } from 'enzyme';
import Form from '../component';

describe('Form', () => {
    it('default', () => {
        const form = shallow(<Form action="/url" crc="123">Some content</Form>);
        expect(form.html()).to.equal('<form method="post" action="/url">' +
            '<input type="hidden" name="crc" value="123"/>' +
            'Some content' +
        '</form>');
    });

    it('with @className', () => {
        const form = shallow(<Form className="some-random-class"/>);
        expect(form.is('form.some-random-class')).to.equal(true);
    });

    describe('check @onSubmit', () => {
        it('with callback', () => {
            const onSubmit = spy();
            const preventDefault = spy();

            const form = mount(<Form action="/url/" crc="123" onSubmit={ onSubmit }>
                <input name="name1" type="text" defaultValue="value1"/>
                <textarea name="name2" defaultValue="value2"/>
            </Form>);

            form.simulate('submit', { preventDefault });

            expect(preventDefault.calledOnce).to.equal(true);
            expect(onSubmit.calledOnce).to.equal(true);
            expect(onSubmit.firstCall.args[0]).to.deep.equal({
                url: '/url/',
                method: 'post',
                data: {
                    crc: '123',
                    name1: 'value1',
                    name2: 'value2',
                },
            });
        });

        it('without callback', () => {
            const preventDefault = spy();
            const form = mount(<Form/>);

            form.simulate('submit', { preventDefault });

            expect(preventDefault.called).to.equal(false);
        });
    });
});
