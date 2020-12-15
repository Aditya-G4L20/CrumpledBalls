
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = createSprite(200,300,20,20);
	rectMode(CENTER);
	World.add(world, ball);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball.display();
  
  drawSprites();
 
}

function keyPressed()
{
	if(keyDown = UP_ARROW){
		ball.velocityX = 0;
		ball.velocityY = 4;
	}

	if(keyDown = DOWN_ARROW){
		ball.velocityX = 0;
		ball.velocityY = -4;
	}

	if(keyDOwn = RIGHT_ARROW){
		ball.velocityX = 4;
		ball.velocityY = 0;
	}

	if(keyDown = LEFT_ARROW){
		ball.velocityX = -4;
		ball.velovityY = 0;
	}
}



