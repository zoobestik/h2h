export const RedirectError = function(url) {
    this.url = url;
};

RedirectError.prototype = new Error();

export const NotFoundError = function() {};

NotFoundError.prototype = new Error();

export const handle = () => (
    (err, req, res, next) => {
        if (err instanceof RedirectError) {
            console.log(`redirect url: ${ err.url }`);
            res.statusCode = 302;

            return res.end();
        }
        else if (err instanceof NotFoundError) {
            console.log(`page not found: ${ req.url }`);
            res.statusCode = 404;

            return res.end('Page not found');
        }
        else {
            next(err);
        }
    }
);
