var lin1,lin2,lin3, lin4, lin5, lin6, lin7, lin8, lin9,lin10, lin11, lin12;


function setup() {
  createCanvas(1000, 400);
  //Crea los sprites necesarios para formar tu nombre
  lin1 = createSprite(100, 100, 15, 100)
  lin1.shapeColor = "#09a489"

  lin2 = createSprite(155, 150, 100, 15)
  lin2.shapeColor = "#09a489"

  lin3 = createSprite(210, 100, 15, 100)
  lin3.shapeColor = "#09a489"

  lin4 = createSprite(250, 100, 15, 105)
  lin4.shapeColor = "#c8f53a"

  lin5 = createSprite(300, 50, 90, 15)
  lin5.shapeColor = "#c8f53a"

  lin6 = createSprite(350, 100, 15, 100)
  lin6.shapeColor = "#c8f53a"

  lin7 = createSprite(400, 100, 15, 105)
  lin7.shapeColor = "#c8f53a"

  lin8 = createSprite(450, 50, 90, 15)
  lin8.shapeColor = "#c8f53a"

  lin9 = createSprite(500, 100, 15, 100)
  lin9.shapeColor = "#c8f53a"

  lin10 = createSprite(450, 100, 90, 15)
  lin10.shapeColor = "#c8f53a"

  lin11 = createSprite(575, 100, 15, 100)
  lin11.shapeColor = "#f320ee"


}


function draw() {
  background("black");

  drawSprites();
  
}