var React = require('react'),
    Link = require('react-router-component').Link,
    IndexPage;

IndexPage = React.createClass({
    render: function() {
        return (
            <ul>
                <li><Link href="/users/">user page</Link></li>
            </ul>
        );
    }
});

module.exports = IndexPage;
