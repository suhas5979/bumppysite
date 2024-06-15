const fs = require('fs');
const path = require('path');
const { rmdirSync, existsSync, readdirSync } = fs;
const config = require('./public/locales/config.json');
const { locales } = config;
const pagesDir = path.join(__dirname, 'pages');

function removeLocaleFolders() {
    if (!existsSync(pagesDir)) {
        console.log('Pages directory does not exist.');
        return;
    }

    locales.forEach(locale => {
        const localePagesDir = path.join(pagesDir, locale);

        if (existsSync(localePagesDir)) {
            removeFolderRecursive(localePagesDir);
            console.log(`Removed ${locale} folder.`);
        } else {
            console.log(`${locale} folder does not exist.`);
        }
    });

    console.log('Locale folders removed successfully.');
}

function removeFolderRecursive(directory) {
    const files = readdirSync(directory);
    for (const file of files) {
        const filePath = path.join(directory, file);
        if (fs.statSync(filePath).isFile()) {
            fs.unlinkSync(filePath);
        } else {
            removeFolderRecursive(filePath);
        }
    }
    fs.rmdirSync(directory);
}

// removeLocaleFolders();
