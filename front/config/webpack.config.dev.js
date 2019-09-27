const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

console.log(path.resolve(__dirname, '../dist'));

module.exports = {
    // node 실행되는 위치
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        // 절대경로 필수
        path: path.resolve(__dirname, '../dist')
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        index: 'index.html',
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: "html-loader",
                    options: {
                        minimize: true
                    }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                // scss 변환 > css 변환 > 파일로 추출
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
    ]
}