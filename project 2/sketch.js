
let square;
let aviators;
let round;
let ovals;
let butterfly;
let box;

let squareButtonX = 70;
let squareButtonY = 90;


let aviatorsButtonX = 70;
let aviatorsButtonY = 290;

let roundButtonX = 70;
let roundButtonY = 490;

let ovalsButtonX = 1200;
let ovalsButtonY = 90;

let butterflyButtonX = 1200;
let butterflyButtonY = 290;

let boxButtonX = 1200;
let boxButtonY = 490;


let squareBool = false
let aviatorsBool = false;
let roundBool = false
let ovalsBool = false
let butterflyBool = false
let boxBool = false

let squareX = [];
let squareY = [];

let aviatorsX = [];
let aviatorsY = [];

let roundX = [];
let roundY = [];

let ovalsX = [];
let ovalsY = [];

let butterflyX = [];
let butterflyY = [];

let boxX = [];
let boxY = [];

function preload(){
  square = loadImage('eyewear/square.png')
  squareButton = loadImage('eyewear/square.png')
  aviators = loadImage('eyewear/aviators.png')
  round = loadImage('eyewear/round.png')
  ovals = loadImage('eyewear/ovals.png')
  butterfly = loadImage('eyewear/butterfly.png')
  box = loadImage('eyewear/box.png')


}




function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
  imageMode(CENTER);


}






function draw() {
  background(250);

  image(capture, width/2, height/2 );

  fill(0)
  textSize(24)
  textAlign(CENTER, TOP);
  text('CLICK ON FRAMES TO TRY THEM ON', 0, 12, width);

  noStroke()
  fill(58, 59, 61)
  rect(0, 100, 160, 20)

  noStroke()
  fill(58, 59, 61)
  rect(0, 300, 160, 20)

  noStroke()
  fill(58, 59, 61)
  rect(0, 500, 160, 20)

  noStroke()
  fill(58, 59, 61)
  rect(width - 170, 100, 160, 20)

  noStroke()
  fill(58, 59, 61)
  rect(width - 170, 300, 160, 20)

  noStroke()
  fill(58, 59, 61)
  rect(width - 170, 500, 160, 20)


  for(let i = 0; i < squareX.length; i++){
    image(square, squareX[i], squareY[i], 450, 300);
  }

  for(let i = 0; i < aviatorsX.length; i++){
    image(aviators, aviatorsX[i], aviatorsY[i], 450, 300);
  }

  for(let i = 0; i < roundX.length; i++){
    image(round, roundX[i], roundY[i], 450, 300);
  }

  for(let i = 0; i < ovalsX.length; i++){
    image(ovals, ovalsX[i], ovalsY[i], 450, 300);
  }

  for(let i = 0; i < butterflyX.length; i++){
    image(butterfly, butterflyX[i], butterflyY[i], 450, 300);
  }

  for(let i = 0; i < boxX.length; i++){
    image(box, boxX[i], boxY[i], 450, 300);
  }


  image(squareButton, squareButtonX, squareButtonY, 90, 50 );

  image(aviators, aviatorsButtonX, aviatorsButtonY, 90,50 );

  image(round, roundButtonX, roundButtonY, 90,50 );

  image(ovals, ovalsButtonX, ovalsButtonY, 90,50 );

  image(butterfly, butterflyButtonX, butterflyButtonY, 90,50 );

  image(box, boxButtonX, boxButtonY, 90,50 );
}

function mousePressed(){


  //flip booleans and splice arrays
  if(dist(mouseX, mouseY, squareButtonX, squareButtonY) < 50){
    squareBool = true;
    aviatorsBool = false;
    roundBool = false;
    ovalsBool = false;
    butterflyBool = false;
    print(squareBool);
    aviatorsX.splice(0, aviatorsX.length);
    aviatorsY.splice(0, aviatorsY.length);
    roundX.splice(0, roundX.length);
    roundY.splice(0, roundY.length);
    ovalsX.splice(0, ovalsX.length);
    ovalsY.splice(0, ovalsY.length);
    butterflyX.splice(0, butterflyX.length);
    butterflyY.splice(0, butterflyY.length);
    boxX.splice(0, boxX.length);
    boxY.splice(0, boxY.length);
  }

  if(dist(mouseX, mouseY, aviatorsButtonX, aviatorsButtonY) < 25){
    aviatorsBool = true;
    squareBool = false;
    roundBool = false;
    ovalsBool = false;
    butterflyBool = false;
    boxBool = false;
    print(aviatorsBool);
    squareX.splice(0, squareX.length);
    squareY.splice(0, squareY.length);
    roundX.splice(0, roundX.length);
    roundY.splice(0, roundY.length);
    ovalsX.splice(0, ovalsX.length);
    ovalsY.splice(0, ovalsY.length);
    butterflyX.splice(0, butterflyX.length);
    butterflyY.splice(0, butterflyY.length);
    boxX.splice(0, boxX.length);
    boxY.splice(0, boxY.length);
  }

  if(dist(mouseX, mouseY, roundButtonX, roundButtonY) < 25){
    roundBool = true;
    aviatorsBool = false;
    squareBool = false;
    ovalsBool = false;
    butterflyBool = false;
    boxBool = false;
    print(roundBool);
    squareX.splice(0, squareX.length);
    squareY.splice(0, squareY.length);
    aviatorsX.splice(0, roundX.length);
    aviatorsY.splice(0, roundY.length);
    ovalsX.splice(0, ovalsX.length);
    ovalsY.splice(0, ovalsY.length);
    butterflyX.splice(0, butterflyX.length);
    butterflyY.splice(0, butterflyY.length);
    boxX.splice(0, boxX.length);
    boxY.splice(0, boxY.length);
  }

  if(dist(mouseX, mouseY, ovalsButtonX, ovalsButtonY) < 25){
    ovalsBool = true;
    roundBool = false;
    aviatorsBool = false;
    squareBool = false;
    butterflyBool = false;
    boxBool = false;
    print(roundBool);
    squareX.splice(0, squareX.length);
    squareY.splice(0, squareY.length);
    aviatorsX.splice(0, roundX.length);
    aviatorsY.splice(0, roundY.length);
    butterflyX.splice(0, butterflyX.length);
    butterflyY.splice(0, butterflyY.length);
    boxX.splice(0, boxX.length);
    boxY.splice(0, boxY.length);
    roundX.splice(0, roundX.length);
    roundY.splice(0, roundY.length);
  }

  if(dist(mouseX, mouseY, butterflyButtonX, butterflyButtonY) < 25){
    butterflyBool = true;
    ovalsBool = false;
    roundBool = false;
    aviatorsBool = false;
    squareBool = false;
    boxBool = false;
    print(butterflyBool);
    squareX.splice(0, squareX.length);
    squareY.splice(0, squareY.length);
    aviatorsX.splice(0, roundX.length);
    aviatorsY.splice(0, roundY.length);
    boxX.splice(0, boxX.length);
    boxY.splice(0, boxY.length);
    roundX.splice(0, roundX.length);
    roundY.splice(0, roundY.length);
    ovalsX.splice(0, ovalsX.length);
    ovalsY.splice(0, ovalsY.length);
  }

  if(dist(mouseX, mouseY, boxButtonX, boxButtonY) < 25){
    boxBool = true;
    roundBool = false;
    aviatorsBool = false;
    squareBool = false;
    butterflyBool = false;
    ovalsBool = false;
    print(boxBool);
    squareX.splice(0, squareX.length);
    squareY.splice(0, squareY.length);
    aviatorsX.splice(0, roundX.length);
    aviatorsY.splice(0, roundY.length);
    roundX.splice(0, roundX.length);
    roundY.splice(0, roundY.length);
    ovalsX.splice(0, ovalsX.length);
    ovalsY.splice(0, ovalsY.length);
    butterflyX.splice(0, butterflyX.length);
    butterflyY.splice(0, butterflyY.length);
  }
  return false
}






  //checking to see if booleans are true
  if(roundBool == true){
    if(dist(mouseX, mouseY, width/2, height/2)< 20 && roundX.length < 1){
      roundX.push(mouseX);
      roundY.push(mouseY);
      print(roundBool);
      squareX.splice(0, squareX.length);
      squareY.splice(0, squareY.length);
      aviatorsX.splice(0, aviatorsX.length);
      aviatorsY.splice(0, aviatorsY.length);
      // print(squareX.length);
      // print(squareX[0]);
      // print(squareY[0]);
    }
  }

  if(aviatorsBool == true){
    if(dist(mouseX, mouseY, width/2, height/2)< 20 && aviatorsX.length < 1){
      aviatorsX.push(mouseX);
      aviatorsY.push(mouseY);
      print(aviatorsX.length);
      print(aviatorsX[0]);
      print(aviatorsY[0]);
    }
  }

    if(squareBool == true){
      if(dist(mouseX, mouseY, width/2, height/2)< 20 && squareX.length < 1){
        squareX.push(mouseX);
        squareY.push(mouseY);
      }
    }

      if(roundBool == true){
        if(dist(mouseX, mouseY, width/2, height/2)< 20 && roundX.length < 1){
          roundX.push(mouseX);
          roundY.push(mouseY);
      }
    }

      if(ovalsBool == true){
        if(dist(mouseX, mouseY, width/2, height/2)< 20 && ovalsX.length < 1){
            ovalsX.push(mouseX);
            ovalsY.push(mouseY);
        }
      }

          if(butterflyBool == true){
            if(dist(mouseX, mouseY, width/2, height/2)< 20 && butterflyX.length < 1){
              butterflyX.push(mouseX);
              butterflyY.push(mouseY);
            }
          }

            if(boxBool == true){
              if(dist(mouseX, mouseY, width/2, height/2)< 20 && boxX.length < 1){
                boxX.push(mouseX);
                boxY.push(mouseY);
              }
              // print(aviatorsX.length);
              // print(aviatorsX[0]);
              // print(aviatorsY[0]);

}



function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
