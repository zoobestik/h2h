import Link from 'react-router-dom/Link';
import { url } from 'app/lib';

export default () => (
    <div>
        No any pages. Go to <Link to={ url('/explore/') }>explore</Link>.
    </div>
);
