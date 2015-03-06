var React = require('react'),
    Link = require('react-router').Link,
    Promise = require('bluebird'),
    IndexPage;

IndexPage = React.createClass({
    statics: {
        action: function() {
            return Promise.resolve();
        }
    },

    getInitialState: function() {
        return {};
    },

    render: function() {
        return (
            <ul>
                <li><Link to="App">{ this.state.name }</Link></li>
            </ul>
        );
    }
});

module.exports = IndexPage;
