const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webPackNodeExternals = require('webpack-node-externals'); // We don't need to bundle node_modules as we have access to them

const config = {
    // Inform webpack that we're building a bundle for nodejs
    // By default webpack assumes you're creating a bundle for the client side so we need to be specific
    target: 'node',
    // Tell webpack about the entry point of the application
    entry: './src/index.js',
    // Tell webpack where we want the code to be outputted after it's generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [webPackNodeExternals()] // if the library exists in the node modules folder, don't bundle it
};

module.exports = merge(baseConfig, config);