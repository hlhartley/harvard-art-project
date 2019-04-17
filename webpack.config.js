
module.exports = {
    performance: process.env.NODE_ENV === 'production' ? "warning" : false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
}

