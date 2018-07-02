const path = require('path');

const CLIENT_DEST = path.join(__dirname, './client/dist');

module.exports = {
    mode: 'production',
    entry: ['babel-polyfill', './client/src/index.js'],
    output: { path: CLIENT_DEST, filename: 'bundle.js' },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/dist/images',
                        outputPath: 'images'
                    }
                }
            },
            {
                test: /\.(pdf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/dist/docs',
                        outputPath: 'docs'
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}














// const path = require('path');

// const CLIENT_DEST = path.join(__dirname, './client/dist')

// module.exports ={
//     entry:'./client/index.js', // this is as where do we start?//
//     output: {path: CLIENT_DEST, filename: 'bundle.js'},
//     module: {
//         loaders: [
//             {
//                 test:/.jsx?$/,
//                 loader: '/babel-loader',
//                 exclude: /node_module/,
//                 query: {
//                     presets: ['ev', 'react']
//                 }
//             }
//         ]
//     },
//     resolve: {
//         extensions: ['.js', '.jsx']
//     }
// }