/**
 * @file Storybook configuration.
 */

const createOurConfig = require('../config/webpack.config.js');

const ourConfig = createOurConfig();

module.exports = {
    core: {
        // Storybook supports Webpack 4 by default.
        // Since we use Webpack 5, we need this option.
        builder: 'webpack5'
    },
    stories: [
        '../src/story/**/*.stories.@(js|jsx|ts|tsx|md|mdx)'
    ],
    addons: [
        '@storybook/addon-essentials'
    ],
    staticDirs: [],
    webpackFinal: config => ({
        ...config,
        resolve: {
            modules: [
                ...config.resolve.modules,
                ...ourConfig.resolve.modules
            ],
            extensions: [
                ...config.resolve.extensions,
                ...ourConfig.resolve.extensions
            ],
            alias: {
                ...config.resolve.alias,
                ...ourConfig.resolve.alias
            },
        },
        module: {
            rules: [
                ...config.module.rules,
                // Don't re-use .css & .scss rule since our rule currently does not work with Storybook...
                ourConfig.module.rules[0]
            ]
        }
    })
};
