function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(225);
  }
  ellipse(mouseX,mouseY,80,80);
}
