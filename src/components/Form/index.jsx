import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { serialize } from '../../lib';

class Form extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        const onSubmit = this.props.onSubmit;

        if (onSubmit) {
            e.preventDefault();

            onSubmit({
                e,
                ...serialize(e.target),
            });
        }
    }

    render() {
        const { crc, children, ...props } = this.props;

        return (
            <form action="" { ...props } onSubmit={ this.onSubmit }>
                <input type="hidden" name="crc" value={ crc }/>
                { children }
            </form>
        );
    }
}

Form.propTypes = {
    crc: PropTypes.string,
    onSubmit: PropTypes.func,
    children: PropTypes.any,
};

const connectToForm = connect(state => ({
    csrf: state.get('csrf'),
}));

export default connectToForm(Form);
