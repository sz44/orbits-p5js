function setup() {
  createCanvas(400, 400);
}
const r = 100;
let a = Math.PI/6;
let selected = false;

function getPos(a) {
  return {x:width/2 + r * Math.cos(a),
          y:height/2 + r * Math.sin(a)
         };
}

function draw() {
  background(150);
  noFill();
  circle(200, 200, 2*r);
  fill('black');
  circle(200, 200, 10);
 
  let pointA = getPos(a)
  fill('green');
  circle(pointA.x, pointA.y, 40);

  text(a, 10, 10);

  
  let pointB = getPos(a * PI)
  fill('orange');
  circle(pointB.x, pointB.y, 40);

  text(a*PI, 10, 20);

}
function mousePressed() {
  let pointA = getPos(a)
  if (dist(mouseX, mouseY, pointA.x, pointA.y) < 20) {
    selected = true;
  }
}
function mouseReleased() {
  selected = false;
}
function mouseDragged() {
  if (selected) {
    let dx = mouseX-200;
    let dy = mouseY-200;
    let newA = Math.atan2(dy, dx);
    a = newA;
  }
}