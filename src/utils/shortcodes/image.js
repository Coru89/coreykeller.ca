const config = require("../../../eleventy.config");
const Image = require("@11ty/eleventy-img");

exports.imageShortCode = (src, alt, cls, loading, sizes, widths, dataSal, dataSalDelay) => {
    let options = {
        widths: widths || [300, 600, 900], // default widths if not provided
        formats: ['avif', 'jpeg'],
        outputDir: "./dist/served", // Output to the dist folder
        urlPath: "/served", // Public URL path
        useCache: true
    };

    // Use src folder for input images
    Image(`./src/${src}`, options);

    let imageAttributes = {
        class: cls || '', // Optional CSS class
        alt: alt || '', // Alt text for accessibility
        sizes: sizes || '100vw', // Responsive sizes
        loading: loading || 'lazy', // Lazy loading for performance
        'data-sal': dataSal || '', // Animation attributes
        'data-sal-delay': dataSalDelay || '' // Animation delay
    };

    // Retrieve image metadata to generate the HTML
    let metadata = Image.statsSync(`./src/${src}`, options);
    return Image.generateHTML(metadata, imageAttributes);
}

/**
 * Register the image shortcode with Eleventy
 */
exports.default = (eleventyConfig) => {
    eleventyConfig.addShortcode("image", (src, alt, cls, loading, sizes, widths, dataSal, dataSalDelay) => {
        return exports.imageShortCode(src, alt, cls, loading, sizes, widths, dataSal, dataSalDelay);
    });
}
