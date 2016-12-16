/* eslint-env mocha */
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Button from '../';

describe('Button', () => {
    const externalUrl = 'http://example.com';

    it('default', () => {
        const button = shallow(<Button>Click Me</Button>);
        expect(button.html()).to.equal('<button class="button" type="button">Click Me</button>');
    });

    it('with @className', () => {
        const button = shallow(<Button className="some-random-class">Click Me</Button>);
        expect(button.is('button.some-random-class')).to.equal(true);
    });

    it('with @type=submit', () => {
        const button = shallow(<Button type="submit">Click Me</Button>);
        expect(button.is('button[type="submit"]')).to.equal(true);
    });

    it.skip('with @href', () => {
        const button = shallow(<Button href={ externalUrl }>Click Me</Button>);
        expect(button.is(`a[href="${externalUrl}"]`)).to.equal(true);
    });

    it.skip('with @href and @type=submit', () => {
        const button = shallow(<Button href={ externalUrl } type="submit">Click Me</Button>);
        expect(button.is(`a[href="${externalUrl}"]`)).to.equal(true);
    });
});
