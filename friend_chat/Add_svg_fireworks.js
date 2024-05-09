// Create a canvas element
var canvas = document.createElement("canvas");
// Get the canvas context
var ctx = canvas.getContext("2d");
// Set the canvas size to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// Append the canvas to the document body
document.body.appendChild(canvas);

// Define a firework class
class Firework {
  // Constructor takes the position, velocity, size and color of the firework
  constructor(x, y, vx, vy, size, color) {
    this.x = x; // x coordinate
    this.y = y; // y coordinate
    this.vx = vx; // x velocity
    this.vy = vy; // y velocity
    this.size = size; // radius
    this.color = color; // fill color
    this.exploded = false; // flag to indicate if the firework has exploded
    this.particles = []; // array to store the particles after explosion
  }

  // Update the position and velocity of the firework
  update() {
    // If the firework has not exploded yet
    if (!this.exploded) {
      // Add the velocity to the position
      this.x += this.vx;
      this.y += this.vy;
      // Add some gravity to the y velocity
      this.vy += 0.1;
      // Check if the firework has reached its peak height
      if (this.vy >= 0) {
        // Set the exploded flag to true
        this.exploded = true;
        // Create some particles with the same position and color as the firework
        this.createParticles();
      }
    } else {
      // Loop through all the particles in the array
      for (var i = 0; i < this.particles.length; i++) {
        // Update and draw each particle
        this.particles[i].update();
        this.particles[i].draw();
        // Remove the particle if its alpha value is zero or less
        if (this.particles[i].alpha <= 0) {
          this.particles.splice(i, 1);
          i--;
        }
      }
    }
  }

  // Draw the firework on the canvas
  draw() {
    // If the firework has not exploded yet
    if (!this.exploded) {
      // Set the fill style to the firework color
      ctx.fillStyle = this.color;
      // Begin a new path
      ctx.beginPath();
      // Draw a circle with the firework position and size
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      // Fill the circle
      ctx.fill();
    }
  }

  // Create some particles with the same position and color as the firework
  createParticles() {
    // Loop for 100 times
    for (var i = 0; i < 100; i++) {
      // Generate random values for the particle properties
      var vx = Math.random() * 5 - 2.5; // random x velocity between -2.5 and 2.5 (smaller than before)
      var vy = Math.random() * 5 - 2.5; // random y velocity between -2.5 and 2.5 (smaller than before)
      var size = Math.random() * 3 + 1; // random size between 1 and 4 (smaller than before)

      // Create a new particle with the same position and color as the firework
      var particle = new Particle(this.x, this.y, vx, vy, size, this.color);
      // Push the particle to the array
      this.particles.push(particle);
    }
  }
}

// Define a particle class (same as before)
class Particle {
  constructor(x, y, vx, vy, size, color) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.size = size;
    this.color = color;
    this.alpha = 1; // add an alpha value to control the opacity of the particle
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += 0.1;
    this.alpha -= 0.02; // decrease the alpha value faster than before to create a quicker fading effect 
   }

   draw() { 
   ctx.fillStyle =
   "rgba(" +this.color +"," +this.alpha +")"; 
   ctx.beginPath(); 
   ctx.arc(this.x,this.y,this.size,
   "0",
   "Math.PI*2"); 
   ctx.fill(); 
   } 
}

// Create an array to storethe fireworks 
var fireworks =
[];// Define a functionto create random fireworks 
function createFireworks() { 
   for (
   var i=0;i<10;i++
   ) { 
   var x =
   Math.random()*canvas.width;// random x position onthe canvas width range 
   var y =
   Math.random()*canvas.height/2+canvas.height/2;// random y position on lower half of canvas height range 
   var vx =
   Math.random()*(Math.random()<0.5?-1:1);// random x velocity between -1 and +1 
   var vy =
   -Math.random()*10-5;// random negative y velocity between -5 and -15 
   var size =
   Math.random()*5+3;// random size between +3 and +8 (smaller than before) 
   var color =
   "rgb(" +
   Math.floor(Math.random()*255) +
   "," +
   Math.floor(Math.random()*255) +
   "," +
   Math.floor(Math.random()*255) +
   ")"; 
   var firework =
   new Firework(x,y,vx,vy,size,color); 
   fireworks.push(firework);
 } 
}

// Define a functionto animatethe fireworks 
function animateFireworks() { 
ctx.clearRect(0,
"0",
"canvas.width",
"canvas.height"); 
for (
var i=0;i<fireworks.length;i++
) { 
fireworks[i].update(); 
fireworks[i].draw(); 
// Removethe firework if it has no more particles left 
if (
fireworks[i].particles.length ==0) { 
fireworks.splice(i,
"1"); 
i--; 
} 
} requestAnimationFrame(animateFireworks); } 

// Callthe functionto createfireworks
createFireworks(); 

// Callthe functionto animatefireworks
animateFireworks();