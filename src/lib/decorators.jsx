import { PureComponent } from 'react';

/**
 * Get High Order Component with optimize component render
 *
 * @param {React.Component} Component – component for purify
 *
 * @returns {Component}
 */
export const purify = Component => (
    class PureWrapper extends PureComponent { // eslint-disable-line react/prefer-stateless-function
        render() {
            return <Component { ...this.props }/>;
        }
    }
);

export const classify = (classes, Child = 'div') =>
    ({ className, ...props }) => (// eslint-disable-line react/prop-types
        <Child
            { ...props }
            className={
                [].concat(classes, className)
                    .map(cls => (typeof cls === 'string' ? cls.trim() : cls))
                    .filter(cls => cls)
                    .join(' ')
            }
        />
    );
