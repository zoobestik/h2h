'use strict';

const React = require('react');

module.exports = React.createClass({
    render: function() {
        let context = this.props.context,
            page = context.getStore('page').getState();

        return (
            <html lang={ page.lang } id="no-js">
                <head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
                    <link rel="shortcut icon" href="favicon.ico"/>
                    <title>{ page.title }</title>
                </head>
                <body>
                    <div id="wrapper" data-preload={  JSON.stringify(context.serialize()) }
                        dangerouslySetInnerHTML={{ __html: React.renderToString(this.props.component) }} />
                    <script src="http://fb.me/react-0.12.2.js"/>
                </body>
            </html>
        );
    }
});
