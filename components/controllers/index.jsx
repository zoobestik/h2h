var React = require('react'),
    Link = require('react-router').Link,
    IndexPage;

IndexPage = React.createClass({
    statics: {
        Controller: require('app/controllers/pages')
    },

    getInitialState: function() {
        var data = this.props.data;

        return {
            name: data.commonInfo.name
        };
    },

    render: function() {
        return (
            <ul>
                <li><Link to="app">{ this.state.name }</Link></li>
            </ul>
        );
    }
});

module.exports = IndexPage;
