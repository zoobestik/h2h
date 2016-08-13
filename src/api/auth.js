export const login = () => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            uid: 3,
            login: 'zoobestik',
        });
    }, 10000);
});

export const logout = () => new Promise(resolve => {
    setTimeout(() => {
        resolve();
    }, 2000);
});
