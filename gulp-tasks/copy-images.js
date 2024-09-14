const gulp = require('gulp');
const path = require('path');
const fs = require('fs');
const { Transform } = require('stream');

// Define paths
const paths = {
    src: 'dist/images/**/*',
    dest: 'src/images'
};

// Check if file exists
const fileExists = (filePath) => fs.existsSync(filePath);

// Custom transform stream to filter files based on existence in the destination
const filterNewFiles = () => {
    return new Transform({
        objectMode: true,
        transform(file, encoding, callback) {
            // Resolve destination path
            const destPath = path.join(paths.dest, path.relative('dist/images', file.path));
            // Debugging: Log paths to verify correctness
            console.log(`Processing file: ${file.path}`);
            console.log(`Destination path: ${destPath}`);
            
            if (!fileExists(destPath)) {
                // Debugging: Confirm file is passed through
                console.log(`File not found in destination, copying: ${file.path}`);
                callback(null, file); // Pass file through if it doesn't exist
            } else {
                // Debugging: Confirm file is skipped
                console.log(`File exists in destination, skipping: ${file.path}`);
                callback(); // Skip file if it exists
            }
        }
    });
};

// Gulp task to copy images only if they don't exist in the destination
const copyImages = () => {
    return gulp.src(paths.src)
        .pipe(filterNewFiles())
        .pipe(gulp.dest(paths.dest))
        .on('end', () => {
            console.log('Image copy task completed.');
        });
};

module.exports = copyImages;
