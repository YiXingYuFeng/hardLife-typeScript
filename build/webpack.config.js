const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
module.exports = {
    entry: './src/index.ts',
    output: {
        filename: "main.js"
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    // 开发环境时 便于查看代码异常
    devtool: process.env.NODE_ENV === 'dev' ? 'inline-source-map' : false,
    devServer: {
        contentBase: './dist',
        stats: 'errors-only', // 控制台提示信息
        host: 'localhost',
        port: 8089
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['./dist'] //打包前清理的文件
        }),
        new HtmlWebpackPlugin({
            template: "./src/template/index.html"
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../src/expample/module/handle_v.js'),
                to: path.resolve(__dirname, '../dist')
            }
        ],{
            ignore: ['./static/index.html'],
        })
    ]
}
