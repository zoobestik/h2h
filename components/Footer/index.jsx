'use strict';

const React = require('react');
const b = require('bem-cn')('footer');

class Footer extends React.Component {

    static get propTypes() {
        return {
            author: React.PropTypes.any.isRequired,
            authorUrl: React.PropTypes.string.isRequired,
            copyright: React.PropTypes.any.isRequired,
            forkMe: React.PropTypes.any.isRequired,
            forkMeUrl: React.PropTypes.string.isRequired,
            mix: React.PropTypes.any, // TODO: Array or Object
        };
    }

    render() {
        return (
            <footer className={ b.mix(this.props.mix) }>
                <div className={ b('copyright') }>
                    { this.props.copyright }
                </div>
                <div className={ b('contacts') }>
                    <div className={ b('fork-me') }>
                        Fork me on <a target='_blank' href={ this.props.forkMeUrl }>{ this.props.forkMe }</a>
                    </div>
                    <div className={ b('author') }>
                        Author: <a target='_blank' href={ this.props.authorUrl }>{ this.props.author }</a>
                    </div>
                </div>
            </footer>
        );
    }
}

module.exports = Footer;

