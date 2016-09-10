var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    context: __dirname ,
    entry: "./src/index",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js"
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};