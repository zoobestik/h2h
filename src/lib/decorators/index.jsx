import { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

export const purify = PureComponent => (
    class PureWrapper extends Component {
        shouldComponentUpdate(nextProps, nextState) {
            return shallowCompare(this, nextProps, nextState);
        }

        render() {
            return <PureComponent { ...this.props }/>;
        }
    }
);

export const classify = classes =>
    (Child = 'div') =>
        ({ className, ...props }) => // eslint-disable-line react/prop-types
            <Child { ...props } className={ classes ? [].concat(className, classes).join(' ') : '' }/>;
