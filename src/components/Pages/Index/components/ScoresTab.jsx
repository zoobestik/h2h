import { Component } from 'react';
import PropTypes from 'prop-types';

export default class ScoresTab extends Component {
    static propTypes = {
        children: PropTypes.node,
    };

    render() {
        return (
            <p>{ this.props.children }</p>
        );
    }
}
