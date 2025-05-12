const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Initialize color palettes array
const colorPalettes = [];
let currentPage = 1;

// Function to add a new color palette
function addColorPalette() {
    rl.question('Enter combination name (or "done" to finish): ', (name) => {
        if (name.toLowerCase() === 'done') {
            // Write the collected colors to color-data.js
            const outputPath = path.join(__dirname, 'color-data.js');
            const outputContent = `const colorPalettes = ${JSON.stringify(colorPalettes, null, 4)};`;
            
            fs.writeFileSync(outputPath, outputContent);
            console.log(`Successfully saved ${colorPalettes.length} color palettes`);
            console.log('Output written to:', outputPath);
            rl.close();
            return;
        }

        rl.question('Enter page number: ', (page) => {
            currentPage = parseInt(page) || currentPage;
            
            const colors = [];
            function addColor() {
                rl.question('Enter hex color (or "done" to finish this palette): ', (color) => {
                    if (color.toLowerCase() === 'done') {
                        if (colors.length > 0) {
                            colorPalettes.push({
                                combinationName: name,
                                colors: colors,
                                sourcePage: currentPage
                            });
                            console.log(`Added palette: ${name} with ${colors.length} colors`);
                            addColorPalette();
                        } else {
                            console.log('No colors added to this palette. Try again.');
                            addColorPalette();
                        }
                    } else {
                        // Validate hex color
                        if (/^#[0-9A-Fa-f]{6}$/.test(color)) {
                            colors.push(color);
                            console.log(`Added color: ${color}`);
                            addColor();
                        } else {
                            console.log('Invalid hex color. Please enter a valid hex color (e.g., #FF0000)');
                            addColor();
                        }
                    }
                });
            }
            
            addColor();
        });
    });
}

console.log('Sanzo Wada Color Extractor');
console.log('==========================');
console.log('Instructions:');
console.log('1. Open https://sanzo-wada.dmbk.io/ in your browser');
console.log('2. For each color combination:');
console.log('   - Enter the combination name');
console.log('   - Enter the page number');
console.log('   - Enter each hex color (e.g., #FF0000)');
console.log('3. Type "done" when finished with a palette');
console.log('4. Type "done" again when finished with all palettes');
console.log('\nLet\'s start!');

addColorPalette(); 