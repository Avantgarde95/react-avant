const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
    const isDevelopmentMode = !argv || argv.mode === 'development';

    // ==============================================
    // Loader rules.

    const ts2js = {
        loader: 'ts-loader',
        options: {
            compiler: 'ttypescript'
        }
    };

    const sass2css = 'sass-loader';

    const css2css = {
        loader: 'css-loader', options: {
            modules: {
                auto: filePath => !filePath.includes('node_modules'),
                mode: 'local',
                //localIdentName: '[path][name]__[local]--[hash:base64:5]'
                localIdentName: 'react-avant-[path][name]__[local]--[hash:base64:5]'
            }
        }
    };

    const css2file = MiniCssExtractPlugin.loader;

    // ==============================================
    // Dev server rules.

    const rootPath = path.resolve(__dirname, '..');
    const srcPath = path.join(rootPath, 'src');
    const outPath = path.join(rootPath, 'dist');

    const serverIP = '0.0.0.0';
    const localIP = '127.0.0.1';
    const serverPort = 8080;

    // ==============================================
    // Final configuration.

    return {
        entry: path.join(srcPath, 'index.ts'),
        devtool: isDevelopmentMode ? 'inline-source-map' : false,
        target: ['web', 'es3'],
        output: {
            path: outPath,
            filename: 'index.js',
            libraryTarget: 'umd'
        },
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        },
        resolve: {
            modules: ['node_modules', srcPath],
            extensions: ['.ts', '.tsx', '.js']
        },
        externals: {
            'react': 'react'
        },
        module: {
            rules: [
                { test: /\.tsx?$/, use: [ts2js] },
                { test: /\.(css|scss)$/, use: [css2file, css2css, sass2css] },
                { test: /\.(png|jpg|gif|svg)$/, type: 'asset/resource' }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'style.css'
            }),
            new CleanWebpackPlugin()
        ],
        devServer: {
            host: serverIP,
            port: serverPort,
            hot: true,
            open: {
                target: `http://${localIP}:${serverPort}`
            },
            historyApiFallback: {
                disableDotRule: true,
            },
            devMiddleware: {
                // webpack-dev-server doesn't write the files on the disk by default.
                // But we have to write the result HTML file to the disk, so we turn on this option.
                writeToDisk: true
            },
            static: {
                directory: outPath
            }
        }
    };
};
