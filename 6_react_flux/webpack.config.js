//подключаем модули
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
    ],

    resolve: {
        alias: {
            App: path.resolve(__dirname, 'src/app/'),
            Pages: path.resolve(__dirname, 'src/app/pages/'),
            Actions: path.resolve(__dirname, 'src/app/actions/'),
            Components: path.resolve(__dirname, 'src/app/components/'),
            Constants: path.resolve(__dirname, 'src/app/constants/'),
            Layouts: path.resolve(__dirname, 'src/app/layouts/')
        }
    }
};
