import { PureComponent, PropTypes } from 'react';

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
