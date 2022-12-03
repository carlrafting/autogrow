const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const icons = require('simple-icons/icons');
const pkg = require("./package.json")

module.exports = function(eleventyConfig) {
    eleventyConfig.addGlobalData("pkg", () => {
        return {
            href: pkg.homepage,
            version: pkg.version
        };
    });
    eleventyConfig.addGlobalData("github_icon", () => {
        return `${icons.siGithub.svg}`;
    });
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPassthroughCopy("www/css");
    eleventyConfig.addPassthroughCopy("dist/autogrow.css");
    eleventyConfig.addPassthroughCopy("dist/autogrow.js");
    eleventyConfig.addPassthroughCopy("logo.png");
};
