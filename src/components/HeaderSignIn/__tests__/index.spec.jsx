/* eslint-env jest */
import HeaderSignIn from '../';

describe('HeaderSignIn', () => {
    it('default', () => {
        const header = shallow(<HeaderSignIn className="some-random-class"/>);
        expect(header.html()).toBe('<div class="header-sign-in some-random-class">' +
            '<a>Sign In</a>' +
            '<a class="header-sign-in__help">' +
                '<img class="header-sign-in__help-icon" alt="sign in icon" src="data:image/svg+xml;utf8,%3Csvg%20xmln' +
            's%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2050%2050%22%20class%3D%22icon%20ico' +
            'ns8-About%22%3E%3Cpath%20d%3D%22M25%201C11.2%201%200%2010.9%200%2023.2%200%2029.2%202.8%2034.7%207.2%203' +
            '8.7%206.5%2040.8%205%2042.4%203.5%2043.7%202.7%2044.3%201.9%2044.9%201.3%2045.5%201%2045.7%200.7%2046%20' +
            '0.5%2046.4%200.3%2046.7%200.1%2047.2%200.2%2047.8L0.3%2048.2%200.7%2048.4C2%2049.1%203.6%2049.2%205.3%20' +
            '49.1%207%2049%208.9%2048.6%2010.8%2048.1%2014.4%2047.1%2017.7%2045.7%2019.5%2044.9%2021.3%2045.3%2023.1%' +
            '2045.5%2024.9%2045.5%2038.7%2045.5%2049.9%2035.6%2049.9%2023.3%2049.9%2011%2038.8%201%2025%201zM25%203C3' +
            '7.8%203%2047.9%2012.2%2047.9%2023.3%2047.9%2034.4%2037.7%2043.5%2024.9%2043.5%2023.1%2043.5%2021.4%2043.' +
            '3%2019.6%2042.9L19.3%2042.8%2019%2043C17.3%2043.7%2013.8%2045.2%2010.3%2046.2%208.5%2046.6%206.7%2047%20' +
            '5.2%2047.1%204.2%2047.2%203.5%2047%202.8%2046.8%203.3%2046.4%204%2045.8%204.8%2045.2%206.6%2043.7%208.6%' +
            '2041.7%209.4%2038.8L9.5%2038.1%209%2037.8C4.6%2034%202%2028.9%202%2023.2%202%2012.1%2012.2%203%2025%203z' +
            'M23.8%2012.8C23.5%2012.8%2023.4%2013%2023.4%2013.2L23.4%2015.8C23.4%2016.1%2023.6%2016.2%2023.8%2016.2L2' +
            '6.2%2016.2C26.5%2016.2%2026.6%2016%2026.6%2015.8L26.6%2013.2C26.6%2012.9%2026.4%2012.8%2026.2%2012.8L23.' +
            '8%2012.8zM23.9%2020.1C23.6%2020.1%2023.5%2020.3%2023.5%2020.5L23.5%2033.9C23.5%2034.2%2023.7%2034.3%2023' +
            '.9%2034.3L23.9%2034.4%2026.2%2034.4C26.5%2034.4%2026.6%2034.2%2026.6%2034L26.6%2020.5C26.6%2020.2%2026.4' +
            '%2020.1%2026.2%2020.1L23.9%2020.1z%22%2F%3E%3C%2Fsvg%3E" height="30" width="30"/>' +
            '</a>' +
        '</div>');
    });
});
