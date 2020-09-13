module.exports = {
    stories: ["../packages/**/stories/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-knobs/register"
    ],
};
