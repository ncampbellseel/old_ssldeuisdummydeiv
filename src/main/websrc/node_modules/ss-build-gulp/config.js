/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Config Settings

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

var assets_base = 'src/assets';

var node_env;
var debug;
var env_name;
var do_test = true;

var env = process.argv[3];
var skipTests = process.argv[4];

if (env === '--production') {
    env_name = 'PRODUCTION';
    node_env = false;
    debug = false;
}

if (env === '--java') {
    env_name = 'JAVA';
    node_env = false;
    debug = true;
}

if (env === '--dev' || env === undefined) {
    env_name = 'DEV';
    node_env = true;
    debug = false;
}

if (env === '--styleguide') {
    env_name = 'STYLEGUIDE';
    node_env = true;
    debug = false;
}

if (skipTests === '--skip') {
    do_test = false;
}

console.log('Hold onto your hats, we\'re in ' + env_name + ' mode');

var settings = {
    name: env_name,
    test: do_test,
    server: {
        port: 3030,
        port_styleguide: 4040,
        port_docs: 6060,
        port_coverage: 7070
    },
    autoprefixerOptions: {
        browsers: ['Chrome 21'],
        cascade: true
    },
    context: {
        NODE_ENV: node_env,
        DEBUG: debug
    },
    opts: {
        conditionals: true,
        quotes: true,
        spare: true
    },
    exclude: '!',
    paths: {
        base: '/',
        app: 'src/app',
        dist: 'dist',
        tmp: 'tmp',
        target: '../../../target',
        test: 'test',
        bower: 'bower_components',
        module: 'node_modules',
        component: assets_base + '/components',
        styleguide: 'styleguide',
        api: 'api',
        docs: 'docs',
        coverage: 'reports/coverage',
        assets: {
            base: assets_base,
            images: assets_base + '/images',
            sprites: assets_base + '/sprites',
            locales: assets_base + '/locales',
            env: assets_base + '/env',
            sass: assets_base + '/sass',
            fonts: assets_base + '/fonts',
            css: assets_base + '/css',
            js: assets_base + '/js'
        }
    }
};

var custom = require('../../custom_config')(settings);

module.exports = custom.override();
