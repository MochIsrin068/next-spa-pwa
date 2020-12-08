const path = require('path')
const withPWA = require('next-pwa')

module.exports = withPWA({
    pwa: {
        dest : 'public',
        swSrc: 'service-worker.js'
    },
    sassOptions: {
        includePaths : [path.join(__dirname, 'styles')]
    }
})