let mover;

function setup() {
  createCanvas(640, 360);
  mover = new Mover();
}

function draw() {
  background(220);

  mover.update()
  mover.checkEdges()
  mover.display()
}

class Mover {
  constructor() {
    this.position = createVector(random(width), random(height))
    this.velocity = createVector(random(-2,2), random(-2,2));
  }

  update() {
    this.position.add(this.velocity)
  }

  display() {
    stroke(0)
    fill(175)
    ellipse(this.position.x, this.position.y, 16, 16);
  }

  checkEdges() {
    if((this.position.x > width) || (this.position.x < 0)) {
      this.velocity.x *= -1;
    }

    if((this.position.y > height) || (this.position.y < 0)) {
      this.velocity.y *= -1;
    }
  }
}