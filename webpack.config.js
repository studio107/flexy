var webpack = require('webpack'),
    path = require('path');

module.exports = {
    // context: path.join(__dirname, './public'),
    // devtool: 'eval',
    entry: {
        site: './js/site.js'
    },
    output: {
        path: path.join(__dirname, '../public/js'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: require.resolve("jquery"),
                loader: "expose-loader?$!expose-loader?jQuery"
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    },
    resolve: {
        modulesDirectories: ['./js', 'node_modules'],
        extensions: ['', '.js']
    },
    plugins: [
        new webpack.ProvidePlugin({
            'Promise': 'bluebird',
            'jQuery': 'jquery',
            '$': 'jquery'
        }),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
        })
    ]
};