/* eslint-env jest */
import renderer from 'react-test-renderer';
import Header from '../component';

describe('Header', () => {
    it('default', () => {
        const header = renderer.carete(<Header className="some-random-class"/>);
        expect(header.toJSON()).toMatchSnapshot();
    });

    it('login', () => {
        const header = renderer.carete(<Header isAuth/>);
        expect(header.toJSON()).toMatchSnapshot();
    });
});
