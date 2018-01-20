var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    {
        entry: "./backend/server.ts",
        output: {
            filename: '../dist/server.js'
        },
        resolve: {
            // Add '.ts' and '.tsx' as a resolvable extension.
            extensions: [".ts", ".tsx", ".js"]
        },
        module: {
            loaders: [
                // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
                {test: /\.tsx?$/, loader: "ts-loader"}
            ]
        },
        target: 'node'
    },
    {
        entry: {
            'frontend': [
                './frontend/polyfills.ts',
                './frontend/main.ts'
            ]
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        output: {
            filename: "../dist/[name].bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loaders: ['awesome-typescript-loader', 'angular2-template-loader']
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                    loader: 'file-loader?name=assets/[name].[hash].[ext]&publicPath=/dist/'
                },
                {
                    test: /\.css$/,
                    use: [
                        'css-to-string-loader',
                        {
                            loader: 'style-loader',
                        },
                        'css-loader'
                    ]
                }
            ]
        },
        plugins: [
            // Workaround for angular/angular#11580
            new webpack.ContextReplacementPlugin(
                // The (\\|\/) piece accounts for path separators in *nix and Windows
                /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
                './src', // location of your src
                {} // a map of your routes
            ),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'dev')
                }
            }),
            new webpack.NormalModuleReplacementPlugin(/\.\/environment\.dev/, './environment.' + process.env.NODE_ENV),
            new ExtractTextPlugin("styles.css"),
            new webpack.LoaderOptionsPlugin({
                options: {
                    htmlLoader: {
                        minimize: false
                    }
                }
            })
        ]
    }
];