var webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: "./js/index",
    output: {
        path: path.resolve(path.join(__dirname, '/build/js')),
        filename: "bundle.js"
        // publicPath: "/assets/"
    },
    module: {
        rules: [
            { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ }
        ]
    },
    resolve: {
        // options for resolving module requests
        // (does not apply to resolving to loaders)

        modules: [
            "node_modules",
            path.resolve(__dirname, "js")
        ],
        extensions: [".js", ".json", ".jsx"]
    },
    devtool: "eval", // enum
    context: __dirname, // string (absolute path!)
    target: "web",
    externals: ["react"],
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                sequences: true,
                properties: true,
                drop_debugger: true,
                dead_code: true,
                conditionals: true,
                booleans: true,
                unused: true,
                if_return: true,
                join_vars: true,
                drop_console: true,
                warnings: process.env.NODE_ENV != 'production'
            }
        }),
        new webpack.ProvidePlugin({
            'jQuery': 'jquery',
            '$': 'jquery'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
            }
        })
    ]
};