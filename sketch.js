function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(236, 209, 161);

  let squareSize = 50;
  let padding = 10; // Space between squares

  // Center the grid
  let startX = (width - (squareSize * 4 + padding * 3)) / 2;
  let startY = (height - (squareSize * 4 + padding * 3)) / 2;

  // Row 1
  fill(1, 82, 143);
  push();
  translate(startX + squareSize / 2, startY + squareSize / 2);
  rotate(random(360));
  rectMode(CENTER);
  rect(0, 0, squareSize, squareSize);
  pop();

  fill(1, 82, 143);
  push();
  translate(startX + (squareSize + padding) + squareSize / 2, startY + squareSize / 2);
  rotate(random(360));
  rectMode(CENTER);
  rect(0, 0, squareSize, squareSize);
  pop();

  fill(58, 40, 43);
  push();
  translate(startX + (squareSize + padding) * 2 + squareSize / 2, startY + squareSize / 2);
  rotate(random(360));
  rectMode(CENTER);
  rect(0, 0, squareSize, squareSize);
  pop();

  fill(17, 84, 92);
  push();
  translate(startX + (squareSize + padding) * 3 + squareSize / 2, startY + squareSize / 2);
  rotate(random(360));
  rectMode(CENTER);
  rect(0, 0, squareSize, squareSize);
  pop();

  // Row 2
  fill(1, 82, 143);
  push();
  translate(startX + squareSize / 2, startY + (squareSize + padding) + squareSize / 2);
  rotate(random(360));
  rectMode(CENTER);
  rect(0, 0, squareSize, squareSize);
  pop();

  fill(0, 0, 128);
  push();
  translate(startX + (squareSize + padding) + squareSize / 2, startY + (squareSize + padding) + squareSize / 2);
  rotate(random(360));
  rectMode(CENTER);
  rect(0, 0, squareSize, squareSize);
  pop();

  fill(0, 0, 128);
  push();
  translate(startX + (squareSize + padding) * 2 + squareSize / 2, startY + (squareSize + padding) + squareSize / 2);
  rotate(random(360));
  rectMode(CENTER);
  rect(0, 0, squareSize, squareSize);
  pop();

  fill(1, 82, 143);
  push();
  translate(startX + (squareSize + padding) * 3 + squareSize / 2, startY + (squareSize + padding) + squareSize / 2);
  rotate(random(360));
  rectMode(CENTER);
  rect(0, 0, squareSize, squareSize);
  pop();

  // Row 3
  fill(17, 84, 92);
  push();
  translate(startX + squareSize / 2, startY + (squareSize + padding) * 2 + squareSize / 2);
  rotate(random(360));
  rectMode(CENTER);
  rect(0, 0, squareSize, squareSize);
  pop();

  fill(58, 40, 43);
  push();
  translate(startX + (squareSize + padding) + squareSize / 2, startY + (squareSize + padding) * 2 + squareSize / 2);
  rotate(random(360));
  rectMode(CENTER);
  rect(0, 0, squareSize, squareSize);
  pop();

  fill(1, 82, 143);
  push();
  translate(startX + (squareSize + padding) * 2 + squareSize / 2, startY + (squareSize + padding) * 2 + squareSize / 2);
  rotate(random(360));
  rectMode(CENTER);
  rect(0, 0, squareSize, squareSize);
  pop();

  fill(0, 0, 128);
  push();
  translate(startX + (squareSize + padding) * 3 + squareSize / 2, startY + (squareSize + padding) * 2 + squareSize / 2);
  rotate(random(360));
  rectMode(CENTER);
  rect(0, 0, squareSize, squareSize);
  pop();

  // Row 4
  fill(1, 82, 143);
  push();
  translate(startX + squareSize / 2, startY + (squareSize + padding) * 3 + squareSize / 2);
  rotate(random(360));
  rectMode(CENTER);
  rect(0, 0, squareSize, squareSize);
  pop();

  fill(0, 0, 128);
  push();
  translate(startX + (squareSize + padding) + squareSize / 2, startY + (squareSize + padding) * 3 + squareSize / 2);
  rotate(random(360));
  rectMode(CENTER);
  rect(0, 0, squareSize, squareSize);
  pop();

  fill(0, 0, 128);
  push();
  translate(startX + (squareSize + padding) * 2 + squareSize / 2, startY + (squareSize + padding) * 3 + squareSize / 2);
  rotate(random(360));
  rectMode(CENTER);
  rect(0, 0, squareSize, squareSize);
  pop();

  fill(17, 84, 92);
  push();
  translate(startX + (squareSize + padding) * 3 + squareSize / 2, startY + (squareSize + padding) * 3 + squareSize / 2);
  rotate(random(360));
  rectMode(CENTER);
  rect(0, 0, squareSize, squareSize);
  pop();
}

function draw() {
}
