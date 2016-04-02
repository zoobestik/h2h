import React from 'react';
import UserState from 'components/userState';

import styles from './index.css';

export default class IndexPage extends React.Component {
    static defaultProps = {
        texts: [],
    };

    getList() {
        const { texts } = this.props;

        if ( ! (texts && texts.length)) {
            return;
        }

        return (
            <ul className={ styles.list }>{
                texts.map((text, i) => (
                    <li key={ i }>{ text }</li>
                ))
            }</ul>
        );
    }

    render() {
        return (
            <div>
                <UserState />
                { this.getList() }
            </div>
        );
    }
}
