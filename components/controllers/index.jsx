var React = require('react'),
    Link = require('react-router').Link,
    IndexPage;

IndexPage = React.createClass({
    render: function() {
        return (
            <ul>
                <li><Link to="app">user page</Link></li>
            </ul>
        );
    }
});

module.exports = IndexPage;
