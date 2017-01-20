export const getStandings = async leagueId => [].concat(...new Array(5)).map((_, i) => ({
    id: `league${leagueId}t${i}`,
    name: `Team ${i}`,
    points: i * 100,
}));

export const getLeague = async id => ({ id });
