//подключаем модули
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        main: path.resolve(__dirname, 'src', 'index.js'),
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    devServer: {
        historyApiFallback: true,
        contentBase: './dist',
    },

    module: {
        rules :[
            {
                test:/\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    plugins :[
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        }),
    ],
};