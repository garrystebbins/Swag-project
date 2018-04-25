module.exports = function(config) {

  // pass our js and images through to the dist
  config.addPassthroughCopy("js");
  config.addPassthroughCopy("images");

  return {
    dir: {
      input: "site",
      output: "dist",
      includes: "_includes"
    },
    templateFormats : ["njk", "md"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk"
  };

};
