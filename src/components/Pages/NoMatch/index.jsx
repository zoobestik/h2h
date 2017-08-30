import { pubUrl } from 'app/lib';
import Link from 'react-router-dom/es/Link';
import Store from 'components/Pages/NoMatch/store';

const NoMatch = () => (
    <div>
        No any pages. Go to <Link to={ pubUrl('/explore/') }>explore</Link>.
    </div>
);

NoMatch.createStore = () => Store.create();

export default NoMatch;
