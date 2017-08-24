import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { serialize } from 'app/lib/form';

export default class Form extends PureComponent {
    static propTypes = {
        crc: PropTypes.string,
        onSubmit: PropTypes.func,
        children: PropTypes.node,
    };

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        const onSubmit = this.props.onSubmit;

        if (onSubmit) {
            e.preventDefault();
            onSubmit(serialize(e.target), e);
        }
    }

    render() {
        const { crc, children, ...props } = this.props;

        return (
            <form method="post" { ...props } onSubmit={ this.onSubmit }>
                <input type="hidden" name="crc" value={ crc || '' }/>
                { children }
            </form>
        );
    }
}
