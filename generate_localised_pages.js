const fs = require('fs');
const path = require('path');
const { copyFileSync, existsSync, mkdirSync, readdirSync } = fs;
const config = require('./public/locales/config.json');
const { locales } = config;
const pagesDir = path.join(__dirname, 'pages');

function generatePages() {
    // Create pages directory if it doesn't exist
    if (!existsSync(pagesDir)) {
        mkdirSync(pagesDir, { recursive: true });
    }

    locales.forEach(locale => {
        const localePagesDir = path.join(pagesDir, locale);

        // Create locale-specific directory if it doesn't exist
        if (!existsSync(localePagesDir)) {
            mkdirSync(localePagesDir, { recursive: true });
        }

        // Iterate over files in the pages directory
        readdirSync(pagesDir).forEach(file => {
            if (file.includes('_app') || file.includes('_document')) {
                // skip to next file ...
                return;
            }
            const sourcePath = path.join(pagesDir, file);
            const stats = fs.statSync(sourcePath);

            // Skip if it's not a file or if it's not a JavaScript file
            if (!stats.isFile() || !file.endsWith('.js')) {
                return;
            }

            // Copy file from pages to locale-specific folder
            const destinationPath = path.join(localePagesDir, file);
            copyFileSync(sourcePath, destinationPath);

            // Perform necessary modifications (e.g., replace placeholders with translations)
            const translatedContent = translateContent(destinationPath, locale);

            // Write the translated content back to the file
            fs.writeFileSync(destinationPath, translatedContent, 'utf8');
        });
    });

    console.log('Pages generated successfully.');
}

function translateContent(filePath, locale) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Adjust import paths for components
    content = content.replace(/from\s+(["'])\.\.\/(\w+)/g, (match, quote, rest) => {
        // Adjust import paths based on the directory structure
        return `from ${quote}../../${rest}`;
    });

    // Adjust direct CSS imports like '../styles.css' to '../../styles.css'
    content = content.replace(/import\s+(["'])\.\.\/(\w+)/g, (match, quote, rest) => {
        // Adjust import path
        return `// import ${quote}../../${rest}`;
    });

    return content;
}

// generatePages();
