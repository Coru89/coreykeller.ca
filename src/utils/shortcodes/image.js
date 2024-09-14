const config = require("../../../eleventy.config");
const Image = require("@11ty/eleventy-img");

exports.imageShortCode = (src, alt, cls, loading, sizes, widths, dataSal, dataSalDelay) => {
    let options = {
        widths: widths,
        formats: ['avif', 'jpeg'],
        outputDir: "./dist/served",
        urlPath: "/served",
        useCache: true
    };

    // Generate images, while this is async we don’t wait
    Image(`./src`, options);

    let imageAttributes = {
        class: cls || '', // Default to empty string if cls is not provided
        alt: alt || '', // Default to empty string if alt is not provided
        sizes: sizes || '100vw', // Default sizes if not provided
        loading: loading || 'lazy', // Default to 'lazy' if not provided
        'data-sal': dataSal || '', // Add data-sal attribute, default to empty string if not provided
        'data-sal-delay': dataSalDelay || '' // Add data-sal-delay attribute, default to empty string if not provided
    };

    // Get metadata even if the images are not fully generated
    let metadata = Image.statsSync(`./src/${src}`, options);
    return Image.generateHTML(metadata, imageAttributes);
}

/**
 * Add shortcode for processing images.
 *
 * @param {object} eleventyConfig Eleventy's configuration object
 */
exports.default = (eleventyConfig) => {
    eleventyConfig.addShortcode("image", (src, alt, cls, loading, sizes, widths, dataSal, dataSalDelay) => {
        return exports.imageShortCode(src, alt, cls, loading, sizes, widths, dataSal, dataSalDelay);
    });
}
