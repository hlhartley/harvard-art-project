
module.exports = {
    performance: { hints: false },
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        compress: true,
        inline: true,
        port: '8080',
        allowedHosts: [
            '.amazonaws.com'
        ]
    },
}

