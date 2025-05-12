const axios = require('axios');
const fs = require('fs');

const SANZO_URL = 'https://sanzo-wada.dmbk.io/assets/colors.json';

// Known combinations that are missing from the API data
const KNOWN_COMBINATIONS = {
    'vandar poel\'s blue': [5],  // Combination 5 with Cossack Green
    'yellow orange': [2],        // Combination 2 with Dark Tyrian Blue
    'citron yellow': [40, 87],   // Combination 40 with Vinaceous Tawny and Combination 87 with Corinthian Pink
    'rainette green': [73],      // Combination 73 with Pale Raw Umber
    'eugenia red | b': [77],     // Combination 77 with Vandar Poel's Blue
    'cameo pink': [101, 105, 116, 120]  // Combinations 101, 105, 116, and 120 with Deep Lyons Blue, Rainette Green, Blue Violet, and Pompeian Red
};

async function fetchAndProcessColors() {
    try {
        const response = await axios.get(SANZO_URL);
        const data = response.data;
        
        // Process the colors data
        const processedColors = {};
        const combinations = {};
        
        // First pass: collect all colors
        data.colors.forEach(color => {
            // Get the color name in lowercase for matching
            const colorNameLower = color.name.toLowerCase();
            
            // Get combinations from API or known combinations
            const colorCombinations = color.combinations || [];
            const knownCombos = KNOWN_COMBINATIONS[colorNameLower] || [];
            
            processedColors[color.hex.toLowerCase()] = {
                name: color.name,
                cmyk: color.cmyk_array,
                rgb: color.rgb_array,
                combinations: [...new Set([...colorCombinations, ...knownCombos])] // Merge and deduplicate
            };
        });

        // Second pass: build combinations map
        // Create a map of combination IDs to their colors
        const comboMap = new Map();
        data.colors.forEach(color => {
            const colorNameLower = color.name.toLowerCase();
            const colorCombinations = color.combinations || [];
            const knownCombos = KNOWN_COMBINATIONS[colorNameLower] || [];
            
            // Combine API combinations with known combinations
            [...new Set([...colorCombinations, ...knownCombos])].forEach(comboId => {
                if (!comboMap.has(comboId)) {
                    comboMap.set(comboId, new Set());
                }
                comboMap.get(comboId).add(color.hex.toLowerCase());
            });
        });

        // Convert the map to our combinations object
        comboMap.forEach((colors, comboId) => {
            combinations[comboId] = {
                colors: Array.from(colors),
                type: 'combination'
            };
        });

        // Write to color-data.js
        const output = `// Color data from Sanzo Wada's Dictionary of Color Combinations
const colorData = {
    colors: ${JSON.stringify(processedColors, null, 2)},
    combinations: ${JSON.stringify(combinations, null, 2)}
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = colorData;
}`;

        fs.writeFileSync('color-data.js', output);
        console.log('Color data has been successfully fetched and processed!');
        
        // Log some statistics
        console.log('\nStatistics:');
        console.log(`Total colors: ${Object.keys(processedColors).length}`);
        console.log(`Total combinations: ${Object.keys(combinations).length}`);
        
        // Find Vandar Poel's Blue
        const vandarBlue = Object.entries(processedColors)
            .find(([_, color]) => color.name.toLowerCase().includes('vandar'));
        
        if (vandarBlue) {
            console.log('\nFound Vandar Poel\'s Blue:');
            console.log(`Name: ${vandarBlue[1].name}`);
            console.log(`Hex: ${vandarBlue[0]}`);
            console.log('Combinations:', vandarBlue[1].combinations);
        }
        
        // Analyze combination 5 specifically
        console.log('\nAnalyzing combination 5:');
        const combo5Colors = combinations[5]?.colors || [];
        console.log('Colors in combination 5:', combo5Colors.map(hex => ({
            hex,
            name: processedColors[hex].name
        })));
        
        // Find all colors that should be in combination 5
        console.log('\nAll colors that reference combination 5:');
        Object.entries(processedColors)
            .filter(([_, color]) => color.combinations.includes(5))
            .forEach(([hex, color]) => {
                console.log(`${color.name} (${hex})`);
            });
        
        // Log combinations with only one color
        const singleColorCombos = Object.entries(combinations)
            .filter(([_, combo]) => combo.colors.length === 1)
            .map(([id, combo]) => ({
                id,
                color: combo.colors[0],
                name: processedColors[combo.colors[0]].name
            }));
        
        if (singleColorCombos.length > 0) {
            console.log('\nCombinations with only one color:');
            singleColorCombos.forEach(combo => {
                console.log(`Combination ${combo.id}: ${combo.name} (${combo.color})`);
            });
        }

        // Double-check combinations 2, 40, 73, 87, 101, 105, 116, and 120
        console.log('\nDouble-checking combinations:');
        [2, 40, 73, 87, 101, 105, 116, 120].forEach(comboId => {
            console.log(`\nCombination ${comboId}:`);
            const comboColors = combinations[comboId]?.colors || [];
            console.log('Colors:', comboColors.map(hex => ({
                hex,
                name: processedColors[hex].name
            })));
        });
    } catch (error) {
        console.error('Error fetching or processing color data:', error.message);
    }
}

fetchAndProcessColors(); 