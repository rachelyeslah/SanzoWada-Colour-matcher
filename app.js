// Remove the require statement since we'll load color-data.js in the HTML
// const colorPalettes = require('./color-data.js');

// DOM Elements
let video = null;
let canvas = null;
let captureBtn = null;
let colorDisplay = null;
let ctx = null;

// Initialize variables
let isCameraOn = false;
let stream = null;

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    
    // Get DOM elements
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    captureBtn = document.getElementById('capture');
    colorDisplay = document.getElementById('colorDisplay');
    
    console.log('DOM elements loaded:', {
        video: !!video,
        canvas: !!canvas,
        captureBtn: !!captureBtn,
        colorDisplay: !!colorDisplay,
        matches: !!document.getElementById('matches')
    });
    
    // Initialize canvas context only if canvas exists
    if (canvas) {
        try {
            ctx = canvas.getContext('2d', { willReadFrequently: true });
            console.log('Canvas context initialized with willReadFrequently');
        } catch (error) {
            console.error('Error initializing canvas context:', error);
            ctx = canvas.getContext('2d'); // Fallback without willReadFrequently
        }
    } else {
        console.error('Canvas element not found');
    }
    
    // Initialize camera
    initCamera();
    
    // Add event listeners
    if (captureBtn) {
        captureBtn.addEventListener('click', () => {
            console.log('Capture button clicked');
            captureColor();
        });
    } else {
        console.error('Capture button not found');
    }

    // Add video event listeners
    if (video) {
        video.addEventListener('loadedmetadata', () => {
            console.log('Video metadata loaded');
            video.play().catch(err => {
                console.error('Error playing video:', err);
            });
        });

        video.addEventListener('error', (err) => {
            console.error('Video error:', err);
            alert('Error accessing camera. Please check your camera permissions and try again.');
        });

        video.addEventListener('playing', () => {
            console.log('Video is playing');
            isCameraOn = true;
        });
    }
});

// Initialize camera
async function initCamera() {
    try {
        console.log('Initializing camera...');
        
        // Check if mediaDevices is supported
        if (!navigator.mediaDevices) {
            throw new Error('navigator.mediaDevices is not supported');
        }
        
        // Check if getUserMedia is supported
        if (!navigator.mediaDevices.getUserMedia) {
            throw new Error('getUserMedia is not supported');
        }

        console.log('Requesting camera access...');
        stream = await navigator.mediaDevices.getUserMedia({ 
            video: {
                facingMode: 'environment', // Prefer rear camera on mobile
                width: { ideal: 1280 },
                height: { ideal: 720 }
            } 
        });
        console.log('Camera access granted');

        if (!video) {
            throw new Error('Video element not found');
        }

        console.log('Setting video source...');
        video.srcObject = stream;
        
        // Wait for video to be ready
        await new Promise((resolve, reject) => {
            video.onloadedmetadata = resolve;
            video.onerror = reject;
        });
        
        console.log('Video metadata loaded, starting playback...');
        await video.play();
        
        isCameraOn = true;
        console.log('Camera initialized successfully');
    } catch (err) {
        console.error('Error accessing camera:', err);
        alert('Could not access camera. Please ensure you have granted camera permissions. Error: ' + err.message);
    }
}

// Convert RGB to HSL for better color matching
function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return [h * 360, s * 100, l * 100];
}

// Convert hex to RGB
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// Calculate color similarity using HSL color space
function colorSimilarity(color1, color2) {
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);
    
    const hsl1 = rgbToHsl(rgb1.r, rgb1.g, rgb1.b);
    const hsl2 = rgbToHsl(rgb2.r, rgb2.g, rgb2.b);
    
    // More precise weighted distance calculation
    // Hue is most important (weight: 3), then saturation (weight: 1.5), then lightness (weight: 0.5)
    const hueDiff = Math.min(Math.abs(hsl1[0] - hsl2[0]), 360 - Math.abs(hsl1[0] - hsl2[0])) / 180;
    const satDiff = Math.abs(hsl1[1] - hsl2[1]) / 100;
    const lightDiff = Math.abs(hsl1[2] - hsl2[2]) / 100;
    
    // Calculate similarity score (lower is better)
    return Math.sqrt(
        Math.pow(hueDiff * 3, 2) +    // Increased hue weight
        Math.pow(satDiff * 1.5, 2) +  // Increased saturation weight
        Math.pow(lightDiff * 0.5, 2)
    );
}

// Adjust color for lighting conditions
function adjustColorForLighting(r, g, b) {
    // Calculate average brightness
    const brightness = (r + g + b) / 3;
    
    // Target brightness (adjust this value based on testing)
    const targetBrightness = 128;
    
    // Calculate adjustment factor
    const factor = targetBrightness / brightness;
    
    // Apply adjustment with limits to prevent oversaturation
    return {
        r: Math.min(255, Math.max(0, r * factor)),
        g: Math.min(255, Math.max(0, g * factor)),
        b: Math.min(255, Math.max(0, b * factor))
    };
}

// Convert RGB to Hex
function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}

// Find the closest Sanzo Wada color to the target color
function findClosestSanzoColor(targetColor) {
    if (!window.colorData || !window.colorData.colors) {
        console.error('Color data not loaded');
        return null;
    }

    let closestColor = null;
    let minDistance = Infinity;
    
    // Iterate through all colors in the colors object
    for (const [hex, colorData] of Object.entries(window.colorData.colors)) {
        const distance = colorSimilarity(targetColor, hex);
        if (distance < minDistance) {
            minDistance = distance;
            closestColor = hex;
        }
    }
    
    console.log('Closest Sanzo Wada color:', closestColor);
    console.log('Distance:', minDistance);
    return closestColor;
}

// Find all combinations containing the specific Sanzo Wada color
function findMatchingPalettes(targetColor) {
    if (!window.colorData || !window.colorData.colors) {
        console.error('Color data not loaded');
        return { matches: [], closestSanzoColor: null };
    }

    console.log('=== Starting Color Matching Process ===');
    console.log('Target color:', targetColor);
    
    // First find the closest Sanzo Wada color
    const closestSanzoColor = findClosestSanzoColor(targetColor);
    if (!closestSanzoColor) {
        return { matches: [], closestSanzoColor: null };
    }
    
    // Get the combinations for this color
    const colorInfo = window.colorData.colors[closestSanzoColor];
    const combinationNumbers = colorInfo.combinations;
    
    // Get the matching combinations
    const matches = combinationNumbers.map(num => ({
        number: num,
        ...window.colorData.combinations[num]
    }));
    
    console.log('Found matches:', matches.length);
    return { matches, closestSanzoColor };
}

// Function to get color name
function getColorName(hex) {
    if (!window.colorData || !window.colorData.colors) {
        return "Unknown Color";
    }
    return window.colorData.colors[hex.toLowerCase()]?.name || "Unknown Color";
}

// Update createColorSwatch function to include color name
function createColorSwatch(color) {
    const swatch = document.createElement('div');
    swatch.className = 'color-swatch';
    swatch.style.backgroundColor = color;
    
    const colorInfo = document.createElement('div');
    colorInfo.className = 'color-info';
    
    const hexCode = document.createElement('div');
    hexCode.className = 'hex-code';
    hexCode.textContent = color;
    
    const colorName = document.createElement('div');
    colorName.className = 'color-name';
    colorName.textContent = getColorName(color);
    
    colorInfo.appendChild(hexCode);
    colorInfo.appendChild(colorName);
    swatch.appendChild(colorInfo);
    
    return swatch;
}

// Update displayMatches function to show color names
function displayMatches(matchingCombinations) {
    const matchesContainer = document.getElementById('matches');
    if (!matchesContainer) return;
    
    matchesContainer.innerHTML = '<h2>Colour Pairings</h2>';
    
    if (matchingCombinations.length === 0) {
        matchesContainer.innerHTML += '<p>No matching combinations found.</p>';
        return;
    }
    
    const matchesGrid = document.createElement('div');
    matchesGrid.className = 'matches-grid';
    
    matchingCombinations.forEach(combination => {
        const matchContainer = document.createElement('div');
        matchContainer.className = 'match-container';
        
        const header = document.createElement('div');
        header.className = 'match-header';
        header.textContent = `Combination ${combination.number} (${combination.type})`;
        
        // Combination bar
        const bar = document.createElement('div');
        bar.className = 'combination-bar';
        combination.colors.forEach(color => {
            const segment = document.createElement('div');
            segment.className = 'combination-segment';
            segment.style.backgroundColor = color;
            // Color info (hex and name)
            const colorInfo = document.createElement('div');
            colorInfo.className = 'color-info';
            colorInfo.innerHTML = `<div class='hex-code'>${color}</div><div class='color-name'>${getColorName(color)}</div>`;
            segment.appendChild(colorInfo);
            bar.appendChild(segment);
        });
        
        matchContainer.appendChild(header);
        matchContainer.appendChild(bar);
        matchesGrid.appendChild(matchContainer);
    });
    
    matchesContainer.appendChild(matchesGrid);
}

// Helper: Euclidean distance between two RGB colors
function rgbDistance(a, b) {
    return Math.sqrt(
        Math.pow(a[0] - b[0], 2) +
        Math.pow(a[1] - b[1], 2) +
        Math.pow(a[2] - b[2], 2)
    );
}

// K-means clustering for RGB pixels
function kMeans(pixels, k = 4, maxIter = 10) {
    // Randomly initialize cluster centers
    let centers = [];
    for (let i = 0; i < k; i++) {
        centers.push(pixels[Math.floor(Math.random() * pixels.length)]);
    }
    let assignments = new Array(pixels.length).fill(0);
    for (let iter = 0; iter < maxIter; iter++) {
        // Assign each pixel to the nearest center
        for (let i = 0; i < pixels.length; i++) {
            let minDist = Infinity, minIdx = 0;
            for (let j = 0; j < k; j++) {
                let dist = rgbDistance(pixels[i], centers[j]);
                if (dist < minDist) {
                    minDist = dist;
                    minIdx = j;
                }
            }
            assignments[i] = minIdx;
        }
        // Update centers
        let newCenters = Array.from({length: k}, () => [0,0,0]);
        let counts = new Array(k).fill(0);
        for (let i = 0; i < pixels.length; i++) {
            let cluster = assignments[i];
            newCenters[cluster][0] += pixels[i][0];
            newCenters[cluster][1] += pixels[i][1];
            newCenters[cluster][2] += pixels[i][2];
            counts[cluster]++;
        }
        for (let j = 0; j < k; j++) {
            if (counts[j] > 0) {
                newCenters[j][0] = Math.round(newCenters[j][0] / counts[j]);
                newCenters[j][1] = Math.round(newCenters[j][1] / counts[j]);
                newCenters[j][2] = Math.round(newCenters[j][2] / counts[j]);
            } else {
                // Reinitialize empty cluster
                newCenters[j] = pixels[Math.floor(Math.random() * pixels.length)];
            }
        }
        centers = newCenters;
    }
    // Count cluster sizes
    let clusterSizes = new Array(k).fill(0);
    for (let i = 0; i < assignments.length; i++) {
        clusterSizes[assignments[i]]++;
    }
    return {centers, clusterSizes};
}

// Helper to display cluster swatches and handle selection
function displayClusterChoices(clusters) {
    console.log('Displaying cluster choices:', clusters);
    const colorDisplay = document.getElementById('colorDisplay');
    if (!colorDisplay) {
        console.error('Color display element not found');
        return;
    }
    
    // Create a container for instruction and swatches
    const container = document.createElement('div');
    container.className = 'cluster-choice-container';
    
    // Instruction
    const instruction = document.createElement('div');
    instruction.className = 'cluster-instruction';
    instruction.textContent = 'Top 4 detected colors. Tap one to analyze.';
    
    // Swatch row
    const swatchRow = document.createElement('div');
    swatchRow.style.display = 'flex';
    swatchRow.style.gap = '16px';
    swatchRow.style.justifyContent = 'center';
    swatchRow.style.margin = '8px 0 0 0';
    
    clusters.forEach((rgb, idx) => {
        const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
        console.log(`Creating swatch ${idx + 1} with color:`, hex);
        
        const swatch = document.createElement('div');
        swatch.className = 'color-swatch';
        swatch.style.width = '80px';
        swatch.style.height = '80px';
        swatch.style.cursor = 'pointer';
        swatch.title = `Click to match this color (${hex})`;
        swatch.style.backgroundColor = hex;
        swatch.innerHTML = `<div class='color-info'><div class='hex-code'>${hex}</div><div class='color-name'>${getColorName(hex)}</div></div>`;
        
        // Add click handler with proper event binding
        swatch.onclick = function(e) {
            console.log('Swatch clicked:', hex);
            e.preventDefault();
            e.stopPropagation();
            matchAndDisplay(hex);
        };
        
        swatchRow.appendChild(swatch);
    });
    
    container.appendChild(instruction);
    container.appendChild(swatchRow);
    colorDisplay.innerHTML = '';
    colorDisplay.appendChild(container);
}

// Helper to match and display results for a selected color
function matchAndDisplay(hexColor) {
    console.log('Starting matchAndDisplay for color:', hexColor);
    
    // Find matching combinations
    const { matches, closestSanzoColor } = findMatchingPalettes(hexColor);
    console.log('Found matches:', matches);
    console.log('Closest Sanzo color:', closestSanzoColor);
    
    // Display the selected color and closest match
    const colorDisplay = document.getElementById('colorDisplay');
    if (colorDisplay) {
        console.log('Updating color display');
        colorDisplay.innerHTML = `
            <div class="color-results-column">
                <div class="captured-color">
                    <h3>Selected Color</h3>
                    <div class="color-swatch" style="background-color: ${hexColor}">
                        <span class="hex-code">${hexColor}</span>
                        <div class="color-name">${getColorName(hexColor)}</div>
                    </div>
                </div>
                <div class="matched-color">
                    <h3>Closest Sanzo Wada Color</h3>
                    <div class="color-swatch" style="background-color: ${closestSanzoColor}">
                        <span class="hex-code">${closestSanzoColor}</span>
                        <div class="color-name">${getColorName(closestSanzoColor)}</div>
                    </div>
                </div>
            </div>
        `;
    } else {
        console.error('Color display element not found');
    }
    
    // Display the matching combinations
    console.log('Displaying matches');
    displayMatches(matches);
}

// Update captureColor to display top 4 colors for selection
function captureColor() {
    if (!video || !canvas || !ctx) return;
    
    // Get the actual video display dimensions
    const videoRect = video.getBoundingClientRect();
    const displayWidth = videoRect.width;
    const displayHeight = videoRect.height;
    
    // Set canvas size to match video display size
    canvas.width = displayWidth;
    canvas.height = displayHeight;
    
    // Draw the video frame to canvas
    ctx.drawImage(video, 0, 0, displayWidth, displayHeight);
    
    // Get analyze box position and size
    const boxSize = 120;
    const x = Math.round((displayWidth - boxSize) / 2);
    const y = Math.round((displayHeight - boxSize) / 2);
    
    // Get the image data from the center box
    const imageData = ctx.getImageData(x, y, boxSize, boxSize);
    const data = imageData.data;
    
    // Collect all pixels in the box
    let pixels = [];
    for (let i = 0; i < data.length; i += 4) {
        pixels.push([data[i], data[i+1], data[i+2]]);
    }
    
    // Run k-means clustering
    const {centers, clusterSizes} = kMeans(pixels, 4, 10);
    // Sort clusters by size (descending)
    const sorted = centers.map((c, i) => ({center: c, size: clusterSizes[i]}))
        .sort((a, b) => b.size - a.size);
    
    // Clear the matches container
    const matchesContainer = document.getElementById('matches');
    if (matchesContainer) {
        matchesContainer.innerHTML = '';
    }
    
    // Display the top 4 colors for selection
    displayClusterChoices(sorted.map(item => item.center));
}