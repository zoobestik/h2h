require('babel-register')(
    Object.assign(
        { ignore: /node_modules\/(?!(app|components))/ },
        require('../../.babelrc.json')
    )
);

require('./setup');
