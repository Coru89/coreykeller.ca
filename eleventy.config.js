const UpgradeHelper = require("@11ty/eleventy-upgrade-help");



module.exports = {
  markdownTemplateEngine: 'njk', // Correctly set Nunjucks as the markdown template engine
  templateFormats: ['html', 'njk', 'md', 'js'],
  dir: {
    input: 'src',
    includes: '_includes',
    data: '_data',
    output: 'dist',
    layouts: '_layouts' // Updated to point to new layouts directory
  },
};
