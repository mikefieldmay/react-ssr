const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js')

const config = {
    // Tell webpack about the entry point of the application
    entry: './src/client/client.js',
    // Tell webpack where we want the code to be outputted after it's generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};

module.exports = merge(baseConfig, config);