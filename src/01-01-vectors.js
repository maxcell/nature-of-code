function setup() {
  createCanvas(640, 360);
}

let x = 100;
let y = 100;
let xspeed = 1;
let yspeed = 3.3;

function draw() {
  background(220);

  // Rate of change
  x += xspeed;
  y += yspeed;

  // If we reach the bounding box, get them to go
  // the other direction
  if((x > width) || (x < 0)) { xspeed *= -1 }
  if((y > height) || (y < 0)) { yspeed *= -1 }

  ellipse(x, y, 16, 16);
}