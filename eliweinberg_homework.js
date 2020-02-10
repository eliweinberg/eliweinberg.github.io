function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight, WEBGL);
   background(255, 255, 77)
}

function draw() {
  // put drawing code here

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(50,100,50);


  strokeWeight(4)
  fill(210, 166, 121, 10)
  rect(0,0,650,windowHeight)



  rect(650,418, windowWidth, 200)
}
