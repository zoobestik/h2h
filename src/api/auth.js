export const login = () => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            crc: '123',
            user: {
                uid: 3,
                login: 'zoobestik',
            },
        });
    }, 10000);
});

export const logout = () => new Promise(resolve => {
    setTimeout(() => {
        resolve();
    }, 2000);
});
