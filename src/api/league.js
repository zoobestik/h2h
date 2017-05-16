const mockTeam = (id, num) => ({
    id: `league${id}t${num}`,
    name: `Team ${num}`,
    points: num * 100,
});

export const load = id => new Promise(resolve => {
    setTimeout(() => {
        resolve([].concat(...new Array(5)).map((_, i) => mockTeam(id, i)));
    }, 3000);
});

export const getLeague = async id => ({ id });
