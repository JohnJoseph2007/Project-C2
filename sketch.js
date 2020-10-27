var striker = createSprite(100, 50, 20, 20);
striker.shapeColor = "white";

striker.velocityX = 5;
striker.velocityY = 6;


var pin1 = createSprite(200, 300, 20, 20);
var pin2 = createSprite(180, 320, 20, 20);
var pin3 = createSprite(220, 320, 20, 20);
var pin4 = createSprite(160, 340, 20, 20);
var pin5 = createSprite(200, 340, 20, 20);
var pin6 = createSprite(240, 340, 20, 20);

function draw() {
  background("red");
  
  drawSprites();
  createEdgeSprites();
  
  striker.bounceOff(edges);
  pin1.bounceOff(edges);
  pin2.bounceOff(edges);
  pin3.bounceOff(edges);
  pin4.bounceOff(edges);
  pin5.bounceOff(edges);
  pin6.bounceOff(edges);
  
  striker.bounce(pin1);
  striker.bounce(pin2);
  striker.bounce(pin3);
  striker.bounce(pin4);
  striker.bounce(pin5);
  striker.bounce(pin6);
  
  pin1.bounce(pin2);
  pin1.bounce(pin3);
  pin1.bounce(pin4);
  pin1.bounce(pin5);
  pin1.bounce(pin6);
  
  pin2.bounce(pin3);
  pin2.bounce(pin4);
  pin2.bounce(pin5);
  pin2.bounce(pin6);

  pin3.bounce(pin4);
  pin3.bounce(pin5);
  pin3.bounce(pin6);

  pin4.bounce(pin5);
  pin4.bounce(pin6);

  pin5.bounce(pin6);

  
}
