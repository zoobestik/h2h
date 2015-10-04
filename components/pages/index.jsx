import React from 'react';
import { connect } from 'react-redux';
import UserState from 'components/userState';

class IndexPage extends React.Component {
    getTextsList() {
        const { texts } = this.props;

        return texts.map((text, i) => (
            <li key={ i }>{ text }</li>
        ));
    }

    render() {
        return (
            <div>
                <UserState user={ this.props.user } />
                <ul id='list'>
                    { this.getTextsList() }
                </ul>
            </div>
        );
    }
}

export default connect(state => state)(IndexPage);
