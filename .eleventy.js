const rssPlugin = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const fs = require('fs');
const path = require("path");
const glob = require("glob");
const lodash = require("lodash");

// Import filters
const dateFilter = require('./src/filters/date-filter.js');
const markdownFilter = require('./src/filters/markdown-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');
const sortByOrder = require('./src/filters/sort-by-order.js');
const subNav = require('./src/filters/subNav.js');

// Import data files
const site = require('./src/_data/site.json');

/**
 * Require all necessary files
 * brings in shortcodes / transforms from utils
 */
const getUtilFiles = () => {
  // Utils directory.
  const dir = path.join(__dirname, `./src/utils`);
  // Pattern of files to require from the directory.
  const globFilesPattern = path.join(dir, "**/*.js");
  // Pattern of files to ignore from the directory.
  const ignoreFiles = ["**/*.spec.js", "_**/*.js", "**/_*/**/*.js", "**/_*.js"];
  const ignoreFilesPattern = ignoreFiles.map((pattern) => path.join(dir, pattern));
  // Find all relevant files.
  let files = glob.sync(globFilesPattern, { ignore: ignoreFilesPattern });
  // Ensure that they are configured correctly. Remove and log a message for
  // those that are not configured properly.
  files = files.map((file) => {
    // Import the file.
    const module = require(file);
    // If everything looks good, return the module.
    if (typeof lodash.get(module, "default") === "function") return module;
    // Otherwise, we have a problem. Gather the appropriate message.
    const error = module.default
      ? `Export "default" must be a function.`
      : `Missing "default" named export.`;
    // Log the message.
    console.error(`Could not load ${path.basename(file)}. ${error}`);
    // And return null.
    return null;
  });
  // Return all valid imports.
  return files.filter((util) => util);
};

module.exports = function (eleventyConfig) {
  // Filters
  eleventyConfig.addFilter('dateFilter', dateFilter);
  eleventyConfig.addFilter('markdownFilter', markdownFilter);
  eleventyConfig.addFilter('w3DateFilter', w3DateFilter);
  eleventyConfig.addFilter("sortByOrder", sortByOrder);
  eleventyConfig.addFilter("subNav", subNav);
  eleventyConfig.addFilter('log', value => {
    console.log(value);
  });

  eleventyConfig.setLayoutResolution(false);

  // Layout aliases
  eleventyConfig.addLayoutAlias('home', 'home.njk');
  eleventyConfig.addLayoutAlias('page', 'page.njk');
  eleventyConfig.addLayoutAlias('base', 'base.njk');

  // Watch targets
  eleventyConfig.addWatchTarget('src/scss');
  eleventyConfig.addWatchTarget('src/images');
  eleventyConfig.addWatchTarget('dist/img');

  // Passthrough copy
  eleventyConfig.addPassthroughCopy('src/fonts');
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/served');
  eleventyConfig.addPassthroughCopy('src/admin/config.yml');
  eleventyConfig.addPassthroughCopy('src/admin/previews.js');
  eleventyConfig.addPassthroughCopy('node_modules/nunjucks/browser/nunjucks-slim.js');
  eleventyConfig.addPassthroughCopy('src/robots.txt');
  eleventyConfig.addPassthroughCopy('src/*.png');
  eleventyConfig.addPassthroughCopy('src/site.webmanifest');
  eleventyConfig.addPassthroughCopy('src/_includes/svg');

  const now = new Date();

  // Custom collections
  // ...

  // Import all macros into posts/pages (minus index) so that end user does not need to for each page
  // ...

  // Plugins
  eleventyConfig.addPlugin(rssPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);

  // Forestry instant previews
  if (process.env.ELEVENTY_ENV === 'development') {
    eleventyConfig.setBrowserSyncConfig({
      host: '0.0.0.0',
    });
  }

  // 404
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync('dist/404.html');

        browserSync.addMiddleware('*', (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
  });

  const UpgradeHelper = require("@11ty/eleventy-upgrade-help");
  eleventyConfig.addPlugin(UpgradeHelper);

  // --- Utils --- //
  //
  getUtilFiles().map((util) => util.default(eleventyConfig));
  //
  // --- Return --- //
  //
  // Return the config object. (This is what actually sets the config for
  // Eleventy. It was written above for reference within utils.)
  return {
    markdownTemplateEngine: 'njk', // Correctly set Nunjucks as the markdown template engine
    templateFormats: ['html', 'njk', 'md', 'js'], // Fixed the typo here
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: 'dist',
      layouts: '_layouts' // Updated to point to new layouts director
    },
  };
};



