// Get a reference to the canvas element and its 2D rendering context 
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

// Set the canvas dimensions
canvas.width = 1024;
canvas.height = 576;

// Fill the canvas with a white background
c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width, canvas.height);
// Import map
const image = new Image();
image.src = 'assets/Pellet Town.png';

// Wait for the map to load before drawing it on the canvas
image.onload = () => {
    c.drawImage(image, -740, -600); // Draw the image at specific coordinates
};