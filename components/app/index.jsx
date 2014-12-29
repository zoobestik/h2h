var React = require('react'),
    Router = require('react-router-component'),
    Pages = Router.Pages,
    Page = Router.Page,
    /* List pages for site routing. */
    IndexPage = require('components/controllers'),
    Page404 = require('components/controllers/404'),
    NotFound = Router.NotFound,
    /* (end): list pages */
    App;

App = React.createClass({
    render: function() {
        return (
            <Pages {...this.props}>
                <Page {...this.props} path="/" handler={IndexPage} />
                <NotFound {...this.props} handler={Page404} />
            </Pages>
        );
    }
});

module.exports = App;
