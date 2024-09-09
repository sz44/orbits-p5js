function setup() {
  createCanvas(400, 400);
}
const a = Math.PI/6;
const b = Math.PI * a;
const r = 100;
const pointA = {x:200 + r * Math.cos(a), y:200 + r * Math.sin(a)};
const pointB = {x:200 + r * Math.cos(b), y:200 + r * Math.sin(b)};
let selected = false;

function getPos(a) {
  
}

function draw() {
  background(220);
  noFill();
  circle(200,200,200);
  fill('black');
  circle(200,200,10);
 
  fill('green');
  circle(pointA.x,pointA.y,40);
  
  fill('orange');
  circle(pointB.x,pointB.y,40);
}
function mousePressed() {
  if (dist(mouseX, mouseY, pointA.x, pointA.y) < 20) {
    selected = true;
  }
}
function mouseReleased() {
  selected = false;
}
function mouseDragged() {
  if (selected) {
    let dx = mouseX-200
    let dy = mouseY-200
    let newA = Math.atan2(dx,dy);
    pointA.x = 200 + r * Math.cos(-newA+PI/2)
    pointA.y = 200 + r * Math.sin(-newA+PI/2)
  }
}