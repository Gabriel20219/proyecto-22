const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher,arrow,board;
var baseimage, playerArcherimage,arrowimage, boardmage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  playerArcherimage = loadImage("./assets/playerArcher.png");
  arrowimage = loadImage("./assets/arrow.png")
  boardmage = loadImage("./assets/board.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options = {
  isStatic: true
  };
  //crear el cuerpo base del jugador

  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  //crear el cuerpo del jugador

  player = Bodies.rectangle(250, playerBase.position.y - 160, 50,180, options);
  World.add(world,player);

  //crear el brazo del jugador

  playerArcher = Bodies.rectangle(270, playerBase.position.y - 160, 50,180, options);
  World.add(world,playerArcher);

  //crear fleca de jugador

  arrow = Bodies.rectangle(800, 220, 10,10, options);
  World.add(world,arrow);

  //crear board en el juego

  board = Bodies.rectangle(1200, 220, 10,10, options);
  World.add(world,board);
}

function draw() {
  background(backgroundImg);

  Engine.update(engine);
  //mostrar la imagen del jugador utilizando la función image()

  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)

  //mostrar la imagen del brazo del jugador utilizando la función image()

  image(playerArcherimage,playerArcher.position.x,playerArcher.position.y,90,100)

  //mostrar la imagen de la base del jugador utilizando la función image()

  image(playerimage,player.position.x,player.position.y,50,180)

  //mostrar la imagen de la base del jugador utilizando la función image()

  image(arrowimage,arrow.position.x,arrow.position.y,50,30)

  //mostrar la imagen de la base del jugador utilizando la función image()

  image(boardmage,board.position.x,board.position.y,100,100)
  
  // Título
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("TIRO CON ARCO ÉPICO", width / 2, 100);
}
