import Store from 'components/Pages/NoMatch/store';

const NoMatch = () => (
    <div>No any pages. Go to <a href="/">explore</a>.</div>
);

NoMatch.store = Store;
NoMatch.routes = [];

export default NoMatch;
