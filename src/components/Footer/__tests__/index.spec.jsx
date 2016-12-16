/* eslint-env mocha */
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Footer from '../';

describe('Footer', () => {
    it('default', () => {
        const footer = shallow(<Footer/>);
        expect(footer.html()).to.equal('<footer class="footer">' +
            '<p class="footer__years">© 2014 – 2015</p>' +
            '<p class="footer__source">Fork me on ' +
                '<a target="_blank" rel="noopener noreferrer" ' +
                    'href="https://github.com/zoobestik/h2h">github.com</a>' +
            '</p>' +
        '</footer>');
    });

    it('with @className', () => {
        const footer = shallow(<Footer className="some-random-class">Click Me</Footer>);
        expect(footer.is('footer.some-random-class')).to.equal(true);
    });
});
