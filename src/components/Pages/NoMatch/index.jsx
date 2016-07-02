import { Link, IndexLink } from 'react-router';

export default () => (
    <div>
        <IndexLink to="/">Index</IndexLink>
        <Link to="/login">Login</Link>
    </div>
);

