const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
    const isDevelopmentMode = !argv || argv.mode === 'development';

    // ==============================================
    // Configurations.

    const rootPath = path.resolve(__dirname, '..');
    const srcPath = path.join(rootPath, 'src');
    const outPath = path.join(rootPath, 'lib');

    // Components provided by this library.
    const componentNames = [
        'Icon',
        'Code',
        'Sandbox',
        'Markdown',
        'Image'
    ];

    // Libraries used by this library.
    const externalNames = [
        'react',
        'prismjs',
        'react-markdown',
        'luminous-lightbox'
    ];

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
                auto: true,
                localIdentName: 'react-avant-[path][name]__[local]--[hash:base64:5]'
            }
        }
    };

    const css2file = MiniCssExtractPlugin.loader;

    // ==============================================
    // Aliases & externals.

    const alias = {};
    const externals = Object.fromEntries(externalNames.map(name => [name, name]));

    // ==============================================
    // Final configuration.

    return {
        entry: Object.fromEntries(componentNames.map(name =>
            [name, path.join(srcPath, 'component', `${name}.tsx`)]
        )),
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
