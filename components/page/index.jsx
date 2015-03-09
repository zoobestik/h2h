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
                    <title>{ page.title }</title>
                    <link rel="shortcut icon" href="/r/favicon.ico"/>

                    <link rel="stylesheet" href="/r/normalize.css"/>
                    <link rel="stylesheet" href="/r/style.css"/>
                </head>
                <body>
                    <div id="application"
                        dangerouslySetInnerHTML={{ __html: React.renderToString(this.props.component) }} />
                    <script src="http://fb.me/react-0.12.2.js"/>
                    <script type="react/store-data"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(context.serialize()) }} />
                </body>
            </html>
        );
    }
});
