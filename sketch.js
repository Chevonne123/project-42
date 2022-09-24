hr = hour();
mn = minuite();
sc = second();

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  angleMode('DEGREES');
  hour();
   text('Current hour:\n' + h, 5, 50);

  minute();
   text('Current minute: \n' + m, 5, 50);

  second();
   text('Current second: \n' + s, 5, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  scAngle = map(sc, 0, 60, 0, 360);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  arc(50, 50, 80, 80, 0, PI + QUARTER_PI, PIE);
describe(
  'white ellipse with top right quarter missing with black outline around the shape'
);
}

