const MODE = 'development';

//const MODE = 'production';

let config = {};

if (MODE == 'development') {
    config = {
        'mode': 'development',
        'server': 'http://localhost:3000',
    };
}

if (MODE == 'production') {
    config = {
        'mode': 'production',
        'server': 'https://spreeberlin.de',
    };
}

export default config;
