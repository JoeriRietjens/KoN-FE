module.exports = {
    devServer: {
        proxy: {
            '^api/': {
              target: 'https://localhost:5001/',
              ws: false,
              changeOrigin: true,
              secure: false,
              pathRewrite: {'/localhost':''},
            logLevel: 'debug'
            }
        }
    }
}
