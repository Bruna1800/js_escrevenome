//placar do jogo 
let meuspontos = 0;
let pontosdooponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

let colidiu = false

function preload(){
  trilha = loadSound ("trilha.mp3");
  ponto = loadSound ("ponto.mp2");
  raquetada = loadSound ("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
 trilha.loop();
}

function draw() {
    background(0);
  mostrabolinha();
  movimentabolinha();
  verificacolisãoborda();
  mostraraquete(xraquete, yraquete);
  movimentaminharaquete();
  verificacolisãoraquete(xraquete, yraquete);
  verificacolisãoraquete(xraqueteoponente, yraqueteoponente);
  mostraraquete(xraqueteoponente, yraqueteoponente);
  movimentoraqueteoponente();
  incluiplacar();
  marcarponto(); 
}

  function mostrabolinha () {
    circle (xbolinha, ybolinha, diametro)
  }

function movimentabolinha () {
  xbolinha += velocidadexbolinha;
  ybolinha += velocidadeybolinha;
}

function verificacolisãoborda(){
   if (xbolinha + raio > width || xbolinha - raio < 0){
    velocidadexbolinha *= -1;
  }
  if (ybolinha + raio > height ||ybolinha - raio < 0){
    velocidadeybolinha += -1;
  }
  
}
  
  function mostraraquete (x,y) { 
    rect (xraquete, yraquete, raquetecomprimento, raquetealtura);
  } 

function movimentaminharaquete (){
  if (KeyIsDown(UP_ARROW)){
      yraquete -=10;
  }
  if (KeyIsDown(DOWN_ARROW)){
    yraquete += 10;
  }
}
  
  function verificacolisãoraquete (){
    if (xbolinha - raio < xraquete + raquetecomprimento && ybolinha - raio < yraquete + raquetealtura && ybolinha + raio > yraquete) {
      velocidadexbolinha *= -1
      raquetada.play();
    }
  }
  
  function verificacolisãoraquete (x,y) {
    colidiu = colideRectCircle(x,y,raquetecomprimento,raquetealtura,xbolinha,ybolinha,raio);
    if (colidiu){
      velocidadexbolinha *=-1;
      raquetada.play ();
    }
  }

function movimentaraqueteoponente (){
  velocidadeYoponente = ybolinha - yraqueteoponente - raquetecomprimento/2 - 30;
  yraqueteoponente += velocidadeyoponente
}
  
function incluiplacar (){
  stroke (255);
  texAlign (CENTER);
  textSide(16);
  fill(color(255,140,0));
  rect(150,10,40,20);
  fill(255);
  text(meuspontos,170,26);
  fil(color(255,140,0));
  rect(450,10,40,20);
  fill(255);
  text(pontosdooponente,470,26);
}

function marcaponto (){
  if(xbolinha > 580){
    meuspontos +=1;
    ponto.play ();
  }
}

if (xbolinha <10) {
  pontosdooponente += 1;
  ponto.play ();
}