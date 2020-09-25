const path = require('path')
const webpack = require('webpack')
const {merge} = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config')

process.env.NODE_ENV = 'production'

module.exports = merge(webpackBaseConfig, {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: 'dview.js',
        library: 'dview',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production'
            }
        })
    ]
})