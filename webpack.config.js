
module.exports = {
    entry: "./src/main.js",//path relative to this file
    performance: process.env.NODE_ENV === 'production' ? "warning" : false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
}

