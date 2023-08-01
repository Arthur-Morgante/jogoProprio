var indi, indieIMG, indieIMGa, indieIMG_corre, indiIMG_esq, indiIMG_esqp
var cenarioIMG
var placa
var inimigo
var tutorial
var chaofake
var parede1, parede2, parede3, parede4
var espinhos

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	indieIMGa = loadAnimation("personagem/indie1.png", "personagem/indie2.png", "personagem/indie3.png")
	indieIMG = loadImage("personagem/indie1.png")
	indieIMG_corre = loadAnimation("personagem/indie2.png", "personagem/indie3.png")

	indiIMG_esq = loadAnimation("personagem/indie1esq.png", "personagem/indie2esq.png", "personagem/indie3esq.png")
	indiIMG_esqp = loadAnimation("personagem/indie1esq.png")

	cenarioIMG = loadImage("cenario.png")

	espinhos_IMG = loadImage("espinhos.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
indi = createSprite(19, 623, 100, 100)
// direita
indi.addAnimation("indip", indieIMG)
indi.addAnimation("indi", indieIMGa)
// esquerda
indi.addAnimation("indi_esqp", indiIMG_esqp)
indi.addAnimation("indi_esq", indiIMG_esq)

//correndo pra direita
indi.addAnimation("indi_corre", indieIMG_corre)

indi.scale = 3

parede1 = createSprite(393, 664, 1000, 10)
parede1.visible = false

parede2 = createSprite(1860, 664, 1306, 10)
parede2.visible = false
  
espinhos = createSprite(1050, 934, 100, 100)
espinhos.addImage("espinhos", espinhos_IMG)
espinhos.setCollider("rectangle", 200, 300, espinhos.width, espinhos.height)
}


function draw() {
  rectMode(CENTER);
  background(cenarioIMG);
  console.log(mouseX, mouseY)

   //indi movimentação
   if (keyDown ("d") && keyDown("f")) {
	indi.changeAnimation("indi_corre");
	indi.velocityX = +30
   } else if(keyDown ("d")) {
	indi.changeAnimation("indi")
	indi.velocityX = 10
   } else if(keyDown("a")) {
	indi.changeAnimation("indi_esq")
	indi.velocityX = -10
   }else{
	indi.velocityX = 0
	indi.changeAnimation("indi_esqp")
   }


   if(indi.collide(espinhos)){
	indi.x = 19
	indi.y = 623 
   }

   if (keyDown ("space")) {
	indi.velocityY = -20
   }

   indi.velocityY = indi.velocityY + 2
   
   /*if (indi.y > 623) {
	indi.y = 623
   }*/

   edges= createEdgeSprites();
   indi.collide(edges[3]);
   indi.collide(parede1)
   indi.collide(parede2)


	espinhos.debug = true


  drawSprites();
 
}



