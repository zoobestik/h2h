export default {
    login() {
        return new Promise((resolve, reject) => {
            setTimeout(reject, 5000);
        });
    },
};
