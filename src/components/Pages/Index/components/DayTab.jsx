import { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class DayTab extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
    };

    render() {
        return (
            <p>{ this.props.children }</p>
        );
    }
}
