const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
    const isDevelopmentMode = !argv || argv.mode === 'development';

    // ==============================================
    // Paths.

    const rootPath = path.resolve(__dirname, '..');
    const srcPath = path.join(rootPath, 'src');
    const outPath = path.join(rootPath, 'dist');

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
    // Final configuration.

    return {
        entry: path.join(srcPath, 'library', 'index.ts'),
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
        ]
    };
};
