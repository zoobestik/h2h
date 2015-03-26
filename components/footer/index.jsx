'use strict';
var React = require('react'),
    b = require('bem-cn')('footer');

module.exports = React.createClass({
    render: function() {
        return (
            <footer className={ b.mix(this.props.mix) }>
                <div className={ b('copyright') }>
                    { this.props.copyright }
                </div>
                <div className={ b('contacts') }>
                    <div className={ b('fork-me') }>
                        Fork me on <a target="_blank" href={ this.props.forkMeUrl }>{ this.props.forkMe }</a>
                    </div>
                    <div className={ b('author') }>
                        Author: <a target="_blank" href={ this.props.authorUrl }>{ this.props.author }</a>
                    </div>
                </div>
            </footer>
        );
    }
});
