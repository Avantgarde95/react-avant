const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
    const isDevelopmentMode = !argv || argv.mode === 'development';

    // ==============================================
    // Paths.

    const rootPath = path.resolve(__dirname, '..');
    const srcPath = path.join(rootPath, 'src');
    const outPath = path.join(rootPath, 'lib');

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
    // Aliases & externals.

    const alias = {};

    const externals = {
        'react': 'react',
        'prismjs': 'prismjs',
        'react-markdown': 'react-markdown'
    };

    // ==============================================
    // Final configuration.

    return {
        entry: {
            index: path.join(srcPath, 'library', 'index.ts'),
            Icon: path.join(srcPath, 'library', 'Icon.tsx'),
            Code: path.join(srcPath, 'library', 'Code.tsx'),
            Sandbox: path.join(srcPath, 'library', 'Sandbox.tsx'),
            Markdown: path.join(srcPath, 'library', 'Markdown.tsx'),
            Image: path.join(srcPath, 'library', 'Image.tsx')
        },
        devtool: isDevelopmentMode ? 'inline-source-map' : false,
        target: ['web', 'es3'],
        output: {
            path: outPath,
            filename: '[name].js',
            libraryTarget: 'umd',
            globalObject: 'this'
        },
        // Turn off chunk splitting to prevent conflict when packing the external libraries.
        // ex. Our code -> index.js, External library -> index.js ... Conflict!
        /*
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        },
        */
        resolve: {
            alias: alias,
            modules: ['node_modules', srcPath],
            extensions: ['.ts', '.tsx', '.js']
        },
        externals: externals,
        module: {
            rules: [
                { test: /\.tsx?$/, use: [ts2js] },
                { test: /\.(css|scss)$/, use: [css2file, css2css, sass2css] },
                { test: /\.(png|jpg|gif|svg)$/, type: 'asset/resource' }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css'
            }),
            new CleanWebpackPlugin()
        ]
    };
};
