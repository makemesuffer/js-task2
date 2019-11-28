const path = require('path');

module.exports ={
    entry: './js/index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'gavno'),
    },
    devtool: "cheap-source-map",
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    mode: "development"
};