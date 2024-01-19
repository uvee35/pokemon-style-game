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

// Define player properties (assuming a player object with width and height)
const player = {
    width: 64, 
    height: 64, 
};

// Create a new player image element
const playerImage = new Image();
playerImage.src = "images/playerDown.png";
// Wait for the player image to load before drawing it on the canvas
playerImage.onload = () => {
    // Draw the player image on the canvas with scaling and positioning
    c.drawImage(
        playerImage,
        0, // Source X position in the player image
        0, // Source Y position in the player image
        playerImage.width / 4, // Source width (assuming the image is divided into 4 frames)
        playerImage.height, // Source height
        canvas.width / 2 - (player.width / 2) / 1.5, // Destination X position on the canvas
        canvas.height / 2 - player.height / 2, // Destination Y position on the canvas
        playerImage.width / 4, // Destination width (scaled)
        playerImage.height // Destination height
    );
};