var React = require('react'),
    Page;

Page = React.createClass({
    render: function() {
        var strInit = JSON.stringify(this.props.data),
            rawHtmlContent = React.renderToString(this.props.component);

        return (
            <html lang="en" id="no-js">
                <head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
                    <link rel="shortcut icon" href="favicon.ico"/>
                    <title>h2h.zoobestik.io</title>
                </head>
                <body>
                    <div id="wrapper" data-init={strInit} dangerouslySetInnerHTML={{ __html: rawHtmlContent }} />
                    <script src="http://fb.me/react-0.12.2.js"/>
                </body>
            </html>
        );
    }
});

module.exports = Page;
