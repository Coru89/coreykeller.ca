const Image = require("@11ty/eleventy-img");

exports.imageShortCode = (src, alt, cls, loading, sizes, widths, dataSal, dataSalDelay) => {
    // Set paths based on environment
    const isProd = process.env.NODE_ENV === "production";

    // In development, use the `src` folder for input images.
    const inputPath = isProd ? `./dist/${src}` : `./src/${src}`;

    let options = {
        widths: widths || [300, 600, 900],
        formats: ['avif', 'jpeg'],
        outputDir: isProd ? "./dist/served" : "./dist/served", // Output to dist in prod, src in dev
        urlPath: isProd ? "/served" : "/served", // URL path remains the same for consistency
        useCache: true
    };

    // Generate images based on environment
    Image(inputPath, options);

    let imageAttributes = {
        class: cls || '',
        alt: alt || '',
        sizes: sizes || '100vw',
        loading: loading || 'lazy',
        'data-sal': dataSal || '',
        'data-sal-delay': dataSalDelay || ''
    };

    // Get metadata even if images are not fully generated
    let metadata = Image.statsSync(inputPath, options);
    return Image.generateHTML(metadata, imageAttributes);
};

/**
 * Register the image shortcode in Eleventy.
 */
exports.default = (eleventyConfig) => {
    eleventyConfig.addShortcode("image", (src, alt, cls, loading, sizes, widths, dataSal, dataSalDelay) => {
        return exports.imageShortCode(src, alt, cls, loading, sizes, widths, dataSal, dataSalDelay);
    });
};
