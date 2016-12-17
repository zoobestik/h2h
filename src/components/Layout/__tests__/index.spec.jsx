/* eslint-env mocha */
import { expect } from 'chai';
import { shallow } from 'enzyme';

const Header = props => <div { ...props }/>;
const Footer = props => <div { ...props }/>;

const Layout = global.componentWithMocks(`${__dirname}/..`, {
    '../Header': Header,
    '../Footer': Footer,
});

describe('Layout', () => {
    it('default', () => {
        const header = shallow(<Layout className="some-random-class">content</Layout>);
        expect(header.html()).to.equal('<div class="layout some-random-class">' +
            '<div class="layout__header"></div>' +
            '<main class="layout__main">content</main>' +
            '<div class="layout__footer"></div>' +
        '</div>');
    });
});
