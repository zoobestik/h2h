/* eslint-env jest */
import Link from 'react-router-dom/Link';
import Button from '../';

describe('Button', () => {
    it('default', () => {
        const button = shallow(<Button>Click Me</Button>);
        expect(button.html()).toBe('<button class="button" type="button">Click Me</button>');
    });

    it('with @className', () => {
        const button = shallow(<Button className="some-random-class">Click Me</Button>);
        expect(button.is('button.some-random-class')).toBe(true);
    });

    it('with @type=submit', () => {
        const button = shallow(<Button type="submit">Click Me</Button>);
        expect(button.is('button[type="submit"]')).toBe(true);
    });

    describe('as a link', () => {
        const externalUrl = 'http://example.com';

        it('with @href', () => {
            const button = shallow(<Button href={ externalUrl }>Click Me</Button>);
            expect(button.matchesElement(<Link>Click Me</Link>)).toBe(true);
            expect(button.html()).toBe('<a class="button" href="http://example.com">Click Me</a>');
        });

        it('with @href and @type=submit', () => {
            const button = shallow(<Button href={ externalUrl } type="submit">Click Me</Button>);
            expect(button.html()).toBe('<a class="button" href="http://example.com">Click Me</a>');
        });
    });
});
