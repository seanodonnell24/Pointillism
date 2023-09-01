let chicken;

function preload(){
  chicken = loadImage("chicken.jpg");
}

function setup() {
  createCanvas(400, 400);
  chicken.resize(500,0);
  image(chicken, 0 ,0);
}

function draw() {
  let pointX = random(width);
  let pointY = random(height);
  let myColor = chicken.get(pointX,pointY);
  fill(myColor);
  circle(pointX, pointY, random(25));
  
  
}