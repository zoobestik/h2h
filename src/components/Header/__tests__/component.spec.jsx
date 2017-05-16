/* eslint-env mocha */
import { expect } from 'chai';
import { shallow } from 'enzyme';

const HeaderSignIn = props => <div data-component="HeaderSignIn" { ...props }/>;
const HeaderAuthInfo = props => <div data-component="HeaderAuthInfo" { ...props }/>;
const Navigation = props => <div { ...props }/>;

const Header = global.componentWithMocks(`${__dirname}/../component`, {
    'components/HeaderSignIn': HeaderSignIn,
    'components/HeaderAuthInfo': HeaderAuthInfo,
    'components/Navigation': Navigation,
});

describe('Header', () => {
    it('default', () => {
        const header = shallow(<Header className="some-random-class"/>);
        expect(header.html()).to.equal('<header class="header some-random-class">' +
            '<div class="header__wrapper">' +
                '<p class="header__logo">H2H Logo</p>' +
                '<nav class="header__navigation">' +
                    '<div class="header__main-menu"></div>' +
                    '<div data-component="HeaderSignIn" class="header__user-info"></div>' +
                '</nav>' +
            '</div>' +
            '<hr class="header__line header__line_top"/>' +
        '</header>');
    });

    it('login', () => {
        const header = shallow(<Header isAuth/>);
        expect(header.html()).to.equal('<header class="header">' +
            '<div class="header__wrapper">' +
                '<p class="header__logo">H2H Logo</p>' +
                '<nav class="header__navigation">' +
                    '<div class="header__main-menu"></div>' +
                    '<div data-component="HeaderAuthInfo" class="header__user-info"></div>' +
                '</nav>' +
            '</div>' +
            '<hr class="header__line header__line_top"/>' +
        '</header>');
    });
});
