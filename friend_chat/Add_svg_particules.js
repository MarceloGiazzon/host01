// Create a canvas element
var canvas = document.createElement("canvas");
// Get the canvas context
var ctx = canvas.getContext("2d");
// Set the canvas size to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// Append the canvas to the document body
document.body.appendChild(canvas);

// Define a particle class
class Particle {
  // Constructor takes the position, velocity, size and color of the particle
  constructor(x, y, vx, vy, size, color) {
    this.x = x; // x coordinate
    this.y = y; // y coordinate
    this.vx = vx; // x velocity
    this.vy = vy; // y velocity
    this.size = size; // radius
    this.color = color; // fill color
  }

  // Update the position and velocity of the particle
  update() {
    // Add the velocity to the position
    this.x += this.vx;
    this.y += this.vy;
    // Bounce the particle off the edges of the canvas
    if (this.x < 0 || this.x > canvas.width) {
      this.vx = -this.vx;
    }
    if (this.y < 0 || this.y > canvas.height) {
      this.vy = -this.vy;
    }
  }

  // Draw the particle on the canvas
  draw() {
    // Set the fill style to the particle color
    ctx.fillStyle = this.color;
    // Begin a new path
    ctx.beginPath();
    // Draw a circle with the particle position and size
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    // Fill the circle
    ctx.fill();
  }
}

// Create an array to store the particles
var particles = [];

// Define a function to create random particles
function createParticles() {
  // Loop for 100 times
  for (var i = 0; i < 100; i++) {
    // Generate random values for the particle properties
    var x = Math.random() * canvas.width; // random x position
    var y = Math.random() * canvas.height; // random y position
    var vx = Math.random() * 10 - 5; // random x velocity between -5 and 5
    var vy = Math.random() * 10 - 5; // random y velocity between -5 and 5
    var size = Math.random() * 10 + 5; // random size between 5 and 15
    var color =
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")"; // random rgb color

    // Create a new particle with the random values
    var particle = new Particle(x, y, vx, vy, size, color);
    // Push the particle to the array
    particles.push(particle);
  }
}

// Define a function to animate the particles
function animateParticles() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Loop through all the particles in the array
  for (var i = 0; i < particles.length; i++) {
    // Update and draw each particle
    particles[i].update();
    particles[i].draw();
  }
  // Request another animation frame
  requestAnimationFrame(animateParticles);
}

// Call the function to create particles
createParticles();
// Call the function to animate particles
animateParticles();