module.exports = {
    // configureWebpack: {
    //     module: {
    //         rules: [
    //             {
    //                 test: /\.(glsl|vs|fs|vert|frag)$/,
    //                 // exclude: /node_modules/,
    //                 use: [
    //                     'raw-loader',
    //                     'glslify-loader'
    //                 ]
    //             }
    //         ]
    //     }
    // }
    chainWebpack: config => {
        // GLSL Loader
        config.module
            .rule('glsl')
            .test(/\.(glsl|vs|fs|vert|frag)$/)
            .use('raw-loader')
            .loader('glslify-loader')
            .end()
    }
}