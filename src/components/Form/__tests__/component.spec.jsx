/* eslint-env jest */
import renderer from 'react-test-renderer';
import Form from '../component';

describe('Form', () => {
    it('default', () => {
        const form = renderer.create(<Form action="/url" crc="123">Some content</Form>);
        expect(form.toJSON()).toMatchSnapshot();
    });

    it('with @className', () => {
        const form = renderer.create(<Form className="some-random-class"/>);
        expect(form.toJSON()).toMatchSnapshot();
    });

    describe('check @onSubmit', () => {
        it('with callback', () => {
            const onSubmit = jest.fn();
            const preventDefault = jest.fn();

            const form = mount(<Form action="/url/" crc="123" onSubmit={ onSubmit }>
                <input name="name1" type="text" defaultValue="value1"/>
                <textarea name="name2" defaultValue="value2"/>
            </Form>);

            form.simulate('submit', { preventDefault });

            expect(preventDefault.mocks.calls.length).toBe(1);
            expect(onSubmit.mocks.calls.length).toBe(1);
            expect(onSubmit.mocks.calls[0][0]).toEqual({
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
            const preventDefault = jest.fn();
            const form = mount(<Form/>);

            form.simulate('submit', { preventDefault });

            expect(preventDefault.mock.calls.length).toBe(1);
        });
    });
});
