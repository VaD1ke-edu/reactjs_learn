const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src', 'App.js'),
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    mode: 'development',

    module: {
        rules :[
            {
                test: /\.(le|c)ss$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test:/\.(jsx|js)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
        ]
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true
    },

    plugins: [
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        })
    ]
};
