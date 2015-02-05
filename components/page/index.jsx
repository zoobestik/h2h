var React = require('react'),
    Page;

Page = React.createClass({
    render: function() {
        var rawHtmlContent = React.renderToString(this.props.component);
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
                    <div id="content" dangerouslySetInnerHTML={{__html: rawHtmlContent }} />
                    <script src="http://fb.me/react-0.12.2.js"/>
                    { /* <script async src="/pages/main.js"></script> */ }
                </body>
            </html>
        );
    }
});

module.exports = Page;
