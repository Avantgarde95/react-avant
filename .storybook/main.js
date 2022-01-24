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
    webpackFinal: config => {
        config.resolve = {
            ...config.resolve,
            ...ourConfig.resolve
        };

        config.module.rules = [
            // We need to exclude the default style rules, since applying our style rule on the default style rules breaks Webpack.
            ...config.module.rules.filter(rule => !rule.test.toString().includes('css')),
            ...ourConfig.module.rules
        ];

        config.plugins = [
            ...config.plugins,
            ...ourConfig.plugins
        ];

        return config;
    }
};
