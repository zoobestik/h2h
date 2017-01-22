import block from 'bem-cn';
import { PropTypes, PureComponent } from 'react';

import './index.pcss';

const PROVIDERS = [
    { id: 'vk', share: 'https://vk.com' },
    { id: 'twitter', share: 'https://twitter.com' },
    { id: 'facebook', share: 'https://facebook.com' },
    { id: 'mail', share: 'mailto:' },
];

const b = block('social-pane');
const classItem = b('item');
const classIcon = b('icon');

const getIconsView = providers => (
    providers.map(({ id, share }) => (
        <li key={ id } className={ classItem() }>
            <a rel="noopener noreferrer" target="_blank" className={ classIcon({ [id]: true })() } href={ share }>
                Share via { id }
            </a>
        </li>
    ))
);

export default class SocialPane extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
    };

    render() {
        const { className } = this.props;

        return (
            <ul className={ b.mix(className)() }>
                { getIconsView(PROVIDERS) }
            </ul>
        );
    }
}
