function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  /*
  stroke(255);
  noFill();
  ellipse(0, 400, 10, 800);
  ellipse(10, 400, 10, 800);
  ellipse(20, 400, 10, 800);
  ellipse(30, 400, 10, 800);
  ellipse(40, 400, 10, 800);
  ellipse(50, 400, 10, 800);
  ellipse(60, 400, 10, 800);
*/

  /*
  stroke(255);
  noFill();
  for (let pX = 0; pX < width; pX = pX + 5) {
    ellipse(pX, 400, 10, height);
  }
  */


  
  let transparencia = 100;
  let grosor = 6;
  let distanciaCirculos = 10;
  let tamanoCirculo = 800;
  
  stroke(255,transparencia);
  noFill();
  strokeWeight(grosor);
  for (let pX = 0; pX < width; pX = pX + distanciaCirculos) {
    ellipse(pX, 400, mouseX, tamanoCirculo);
  }
  
/*

  let transparencia = 60;
  let grosor = 3;
  let distanciaCirculos = 30;
  let tamanoCirculo = 80;

  stroke(255, transparencia);
  noFill();
  strokeWeight(grosor);
  for (let pX = 0; pX < width; pX = pX + distanciaCirculos) {
    for (let pY = 0; pY < height; pY = pY + distanciaCirculos) {
      ellipse(pX, pY, mouseX, mouseX);
    }
  }
*/
}