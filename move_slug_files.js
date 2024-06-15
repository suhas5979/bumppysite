const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Paths
const rootDir = path.join(__dirname, 'out');
const slugFiles = glob.sync(path.join(rootDir, '*[!slugs]'));

// Destination directory
const destDir = path.join(rootDir, 'slugs');

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir);
}

// Move slug files
slugFiles.forEach((file) => {
    const fileName = path.basename(file);
    const destPath = path.join(destDir, fileName);
    fs.renameSync(file, destPath);
});

console.log('Slug files moved to "slugs" directory');
