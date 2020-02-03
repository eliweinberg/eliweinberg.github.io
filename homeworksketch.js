function setup() {
  createCanvas(windowWidth, windowHeight)

}






function draw() {

  background(179, 255, 255);

stroke(102, 255, 102, 150)
strokeWeight(4)
noFill()
quad(35, 90, 45, 40, 65, 45, 55, 95)

stroke(255, 0, 102, 100)
strokeWeight(4)
noFill()
quad(70, 180, 90, 80, 130, 90, 110, 190)

stroke(255, 255, 0, 150)
strokeWeight(4)
noFill()
quad(140, 360, 180, 160, 260, 180, 220, 380)

stroke(255, 102, 0, 150)
strokeWeight(4)
noFill()
quad(280, 720, 360, 320, 520, 360, 440, 760)




fill(255, 102, 0, 150)
stroke(0,0,0)
strokeWeight(1)
  quad(45, 100, 55, 50, 75, 55, 65, 105)


  fill(102, 255, 102, 150)
  stroke(0,0,0)
  strokeWeight(1)
  quad(90, 200, 110, 100, 150, 110, 130, 210)


fill(255, 0, 102, 100)
stroke(0,0,0)
strokeWeight(1)
quad(180, 400, 220, 200, 300, 220, 260, 420)


fill(255, 255, 0, 150)
stroke(0,0,0)
strokeWeight(1)
quad(360, 800, 440, 400, 600, 440, 520, 840)



}


function keyPressed() {
  if(key === 's'){
    save("homeworksketch.png");

  }



}
