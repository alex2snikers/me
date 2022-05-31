const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports =  {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, "src/index.html") }
            ],
        }),
    ],
    
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    
    module: {
        rules: [
            {
                test: /\.(js)/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    }
}