#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Read the original index.html
const indexPath = path.join(__dirname, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Create the config script
const configScript = `
    <script>
        window.PORTFOLIO_CONFIG_URL = "${process.env.PORTFOLIO_CONFIG_URL || ''}";
    </script>
`;

// Insert the config script before the first script tag
indexContent = indexContent.replace('<script', configScript + '<script');

// Write the modified content to index.html
fs.writeFileSync(indexPath, indexContent);

console.log('Build complete: Environment variables injected into index.html');
