// Define the zoom factor and maximum/minimum scale
const zoomFactor = 0.1;
const maxScale = 2;
const minScale = 0.5;

// Get the SVG element
const svg = document.querySelector('svg');

// Initialize the default zoom
svg.style.transform = 'scale(1)';

let isPanning = false;
let panStartX = 0;
let panStartY = 0;
let panTranslateX = 0;
let panTranslateY = 0;

// Add event listeners for mouse down, mouse move, and mouse up events
svg.addEventListener('mousedown', handleMouseDown);
svg.addEventListener('mousemove', handleMouseMove);
svg.addEventListener('mouseup', handleMouseUp);

// Add event listener for the 'wheel' event
svg.addEventListener('wheel', handleMouseWheel);

function handleMouseDown(event) {
  if (event.button === 0) {
    isPanning = true;
    panStartX = event.clientX;
    panStartY = event.clientY;
    panTranslateX = panTranslateY = 0;
  }
}

function handleMouseMove(event) {
  if (isPanning) {
    const dx = event.clientX - panStartX;
    const dy = event.clientY - panStartY;
    panTranslateX += dx;
    panTranslateY += dy;
    svg.style.transform = `scale(${getCurrentScale()}) translate(${panTranslateX}px, ${panTranslateY}px)`;
    panStartX = event.clientX;
    panStartY = event.clientY;
  }
}

function handleMouseUp(event) {
  if (event.button === 0) {
    isPanning = false;
  }
}

function handleMouseWheel(event) {
  event.preventDefault();
  const scaleDelta = event.deltaY > 0 ? -zoomFactor : zoomFactor;
  const currentScale = getCurrentScale();
  const newScale = currentScale + scaleDelta;
  if (newScale >= minScale && newScale <= maxScale) {
    svg.style.transform = `scale(${newScale}) translate(${panTranslateX}px, ${panTranslateY}px)`;
  }
}

function getCurrentScale() {
  const currentTransform = svg.style.transform;
  const scaleRegex = /scale\((.+?)\)/;
  const match = scaleRegex.exec(currentTransform);
  return match ? parseFloat(match[1]) : 1;
}
