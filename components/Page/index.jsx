'use strict';
const React = require('react');

class Page extends React.Component {
    render() {
        const context = this.props.context;
        const page = context.getStore('page').getState();

        return (
            <html lang={ page.lang } id="no-js">
                <head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
                    <title>{ page.title }</title>
                    <link rel="shortcut icon" href="/r/favicon.ico"/>
                    <link rel="stylesheet" href="/css/style.css"/>
                </head>
                <body>
                    <div id="application"
                        dangerouslySetInnerHTML={{ __html: React.renderToString(this.props.component) }} />
                    <script src={ '//fb.me/react-' + this.props.reactVersion +'.js' } />
                    <script id="store" type="react/store-data"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(context.serialize()) }} />
                    <script src="/js/script.js"/>
                </body>
            </html>
        );
    }
}

module.exports = Page;
