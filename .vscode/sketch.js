function setup() {
  createCanvas(400, 400);
  noLoop();
  background(255);
}

function draw() {
  // Color palette for nature and coding
  let green = color(34, 139, 34);
  let blue = color(70, 130, 180);
  let yellow = color(255, 223, 0);
  let grey = color(169, 169, 169);

  // Draw central circle (nature concept)
  fill(green);
  noStroke();
  ellipse(width / 2, height / 2, 150, 150);

  // Code blocks (rectangles) around the circle
  fill(grey);
  for (let i = 0; i < 8; i++) {
    let angle = map(i, 0, 8, 0, TWO_PI);
    let x = width / 2 + cos(angle) * 120;
    let y = height / 2 + sin(angle) * 120;
    rect(x - 20, y - 10, 40, 20); // Code block (rectangular)
  }

  // Curved lines (representing organic flow like branches or roots)
  stroke(blue);
  strokeWeight(3);
  noFill();
  for (let i = 0; i < 4; i++) {
    beginShape();
    for (let j = 0; j < TWO_PI; j += 0.2) {
      let x = width / 2 + cos(j + i) * (100 + 10 * i);
      let y = height / 2 + sin(j + i) * (100 + 10 * i);
      vertex(x, y);
    }
    endShape();
  }

  // Add some small circular "nodes" or leaves
  fill(yellow);
  noStroke();
  for (let i = 0; i < 5; i++) {
    let angle = random(TWO_PI);
    let x = width / 2 + cos(angle) * random(50, 120);
    let y = height / 2 + sin(angle) * random(50, 120);
    ellipse(x, y, 15, 15);
  }

  // Add digital code-like symbols (braces or brackets)
  textSize(32);
  fill(grey);
  text("{ }", width / 2 - 40, height / 2 + 60);
  text("<>", width / 2 - 40, height / 2 + 100);
}
