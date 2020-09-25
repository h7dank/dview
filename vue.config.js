const path = require('path')

function resolve (src) {
    return path.resolve(__dirname, src)
}

module.exports = {
    outputDir: process.env.NODE_ENV === 'production' ? path.resolve(__dirname, 'dist') : path.resolve(__dirname, '/example/dist'),
    publicPath: process.env.NODE_ENV === 'production' ? '/dist/' : '/example',
}