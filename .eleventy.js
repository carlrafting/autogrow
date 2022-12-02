const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPassthroughCopy("www/css");
    eleventyConfig.addPassthroughCopy("dist/autogrow.css");
    eleventyConfig.addPassthroughCopy("dist/autogrow.js");
    eleventyConfig.addPassthroughCopy("logo.png");
};
