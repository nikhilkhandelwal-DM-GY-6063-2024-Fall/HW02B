function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(236,209,161); // Got the RGB Code from color picker tool available online

  let squareSize = 50;
  let padding = 10; // Space between squares

  // Center the grid
  let startX = (width - (squareSize * 4 + padding * 3)) / 2;
  let startY = (height - (squareSize * 4 + padding * 3)) / 2;

  // Row 1
  fill(1,82,143);
  rect(startX, startY, squareSize, squareSize);
  
  fill(1,82,143);
  rect(startX + squareSize + padding, startY, squareSize, squareSize);
  
  fill(58,40,43);
  rect(startX + (squareSize + padding) * 2, startY, squareSize, squareSize);
  
  fill(17,84,92);
  rect(startX + (squareSize + padding) * 3, startY, squareSize, squareSize);
  
  // Row 2
  fill(1,82,143);
  rect(startX, startY + squareSize + padding, squareSize, squareSize);
  
  fill(0,0,128);
  rect(startX + squareSize + padding, startY + squareSize + padding, squareSize, squareSize);
  
  fill(0,0,128);
  rect(startX + (squareSize + padding) * 2, startY + squareSize + padding, squareSize, squareSize);
  
  fill(1,82,143);
  rect(startX + (squareSize + padding) * 3, startY + squareSize + padding, squareSize, squareSize);
  
  // Row 3
  fill(17,84,92);
  rect(startX, startY + (squareSize + padding) * 2, squareSize, squareSize);
  
  fill(58,40,43);
  rect(startX + squareSize + padding, startY + (squareSize + padding) * 2, squareSize, squareSize);
  
  fill(1,82,143);
  rect(startX + (squareSize + padding) * 2, startY + (squareSize + padding) * 2, squareSize, squareSize);
  
  fill(0, 0, 128);
  rect(startX + (squareSize + padding) * 3, startY + (squareSize + padding) * 2, squareSize, squareSize);
  
  // Row 4
  fill(1,82,143);
  rect(startX, startY + (squareSize + padding) * 3, squareSize, squareSize);
  
  fill(0,0,128);
  rect(startX + squareSize + padding, startY + (squareSize + padding) * 3, squareSize, squareSize);
  
  fill(0,0,128);
  rect(startX + (squareSize + padding) * 2, startY + (squareSize + padding) * 3, squareSize, squareSize);
  
  fill(17,84,92);
  rect(startX + (squareSize + padding) * 3, startY + (squareSize + padding) * 3, squareSize, squareSize);
}

function draw() {
}
