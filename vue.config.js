const path = require('path')
const { env } = require('process')

function resolve (src) {
    return path.resolve(__dirname, src)
}

module.exports = {
    outputDir: process.env.NODE_ENV === 'production' ? path.resolve(__dirname, 'dist') : path.resolve(__dirname, '/example/dist'),
    publicPath: process.env.NODE_ENV === 'production' ? '/dist/' : '/example',
    configureWebpack: config => {
        console.log(config.module)
        const alias = {
            "~": resolve('example'),
            '@': resolve('src')
        }
        config.resolve.alias = alias
        if (process.env.NODE_ENV === 'production') {
            config.entry = './src/index.js'
            config.output.filename = 'dview.js'
            config.output.library = 'dview'
            config.optimization.splitChunks = {}
            config.output.libraryTarget = 'umd'
            config.output.umdNamedDefine = true
        } else {
            const entry = {
                app: ['./example/main.js']
            }
            const output = {
                path: path.join(__dirname, '../example/dist'),
                publicPath: '',
                filename: '[name].js',
                chunkFileName: '[name].chunk.js'
            }
            config.entry = entry
            config.output.filename = '[name].js'
        }
    }
}