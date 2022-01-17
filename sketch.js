const Motor = Matter.Engine;
const Mundo= Matter.World;
const Objetos = Matter.Bodies;

var motorr, mundoo,colorr;
var cuadro1,cuadro2,piso_edge;
var cajita;

function setup(){
    var canvas = createCanvas(400,400);
    motorr = Motor.create();
    mundoo = motorr.world; 
  colorr="blue";

    cuadro1 = new Caja(250,300,50,50);
    cuadro2 = new Caja(280,100,50,60);
    cajita = new Caja(277,17,50,50);
    piso_edge = new Piso(200,height,400,20)
}

function draw(){
background(0);
  text(mouseX+" , "+mouseY,300,50);
    Motor.update(motorr);
  //  console.log();

    cuadro1.display();
    cuadro2.display();
    cajita.display();
    piso_edge.display();
}