// WebAssembly polyfill for browsers that don't natively support the Barcode Detection API
// Polyfill sources:
// https://cdn.jsdelivr.net/npm/@undecaf/zbar-wasm@0.9.15/dist/index.js
// https://cdn.jsdelivr.net/npm/@undecaf/barcode-detector-polyfill@0.9.21/dist/index.js
try {
    window['BarcodeDetector'].getSupportedFormats();
} catch {
    const zbarScript = document.createElement('script');
    zbarScript.src = "https://cdn.jsdelivr.net/npm/@undecaf/zbar-wasm@0.9.15/dist/index.js";
    document.head.appendChild(zbarScript);

    const polyfillScript = document.createElement('script');
    polyfillScript.src = "https://cdn.jsdelivr.net/npm/@undecaf/barcode-detector-polyfill@0.9.21/dist/index.js";
    polyfillScript.onload = () => {
        if (typeof barcodeDetectorPolyfill !== 'undefined') {
            window['BarcodeDetector'] = barcodeDetectorPolyfill.BarcodeDetectorPolyfill;
        }
    };
    document.head.appendChild(polyfillScript);
}

// Global variables to manage the scanning state and video stream
let isScanning = false;
let stream = null;
let barcodeDetector = null;

/**
 * Main function to start the barcode scanner.
 */
async function startScanner() {
    // Get references to the UI elements
    const video = document.getElementById('videoElement');
    const resultInput = document.getElementById('resultInput');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');

    // Check if scanning is already active
    if (isScanning) return;

    // Enable/disable buttons and update UI
    isScanning = true;
    startButton.disabled = true;
    stopButton.disabled = false;
    resultInput.value = '';
    resultInput.placeholder = 'Scanning...';

    try {
        // Request permission for the rear camera.
        stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'environment' }
        });
        video.srcObject = stream;
    } catch (err) {
        console.error("Failed to get camera access:", err);
        resultInput.value = "Error: Camera access denied or not available.";
        // Revert button states on failure
        stopScanner();
        return;
    }

    // Wait for the video to be ready to play
    await new Promise(resolve => {
        video.onloadedmetadata = () => {
            video.play();
            resolve();
        };
    });

    // Create a BarcodeDetector instance if it doesn't exist
    if (!barcodeDetector) {
        barcodeDetector = new BarcodeDetector({
            formats: ["ean_13", "ean_8", "upc_a", "upc_e"]
        });
    }

    // Main scanning loop that runs as long as isScanning is true
    while (isScanning) {
        try {
            const barcodes = await barcodeDetector.detect(video);
            if (barcodes.length > 0) {
                const firstBarcode = barcodes[0];
                resultInput.value = firstBarcode.rawValue;

                // Vibrate the device to notify the user of a successful scan (optional).
                if (navigator.vibrate) {
                    navigator.vibrate(200);
                }

                // Stop scanning after a successful read
                stopScanner();
            }
        } catch (err) {
            console.error("Barcode detection error:", err);
        }

        // Small delay to prevent the loop from consuming too much CPU.
        await new Promise(r => setTimeout(r, 50));
    }
}

/**
 * Main function to stop the video stream and reset the UI.
 */
function stopScanner() {
    const video = document.getElementById('videoElement');
    const resultInput = document.getElementById('resultInput');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');

    if (!isScanning) return;
    
    isScanning = false;
    startButton.disabled = false;
    stopButton.disabled = true;
    resultInput.placeholder = "Result will appear here...";

    // Stop the video stream tracks
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        video.srcObject = null;
    }
}

// Add event listeners to the buttons after the DOM has loaded
window.onload = function() {
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    
    startButton.addEventListener('click', startScanner);
    stopButton.addEventListener('click', stopScanner);
};
