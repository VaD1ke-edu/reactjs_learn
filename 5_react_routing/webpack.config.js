//подключаем модули
const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src', 'App.js'),
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
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
        contentBase: path.resolve(__dirname, 'dist')
    }
};
