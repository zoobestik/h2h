import React from 'react';
import { Route, IndexRoute } from 'react-router';

class IndexPage extends React.Component {
    render() {
        return (
            <div id='page'>
                { this.props.children }
            </div>
        );
    }
}

/**
 * Get IndexPage control
 *
 * @param {string} location current location
 * @param {function} next callback when data ready
 */
function asyncIndexPage(location, next) {
    next(null, IndexPage);
}

export default (
    <Route path='/'>
        <IndexRoute getComponent={ asyncIndexPage } />
    </Route>
);
