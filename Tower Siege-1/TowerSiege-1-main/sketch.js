const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 var engine,world
 var ground1,ground2,ground
 var polygon
 function preload(){
     polygonImage=loadImage("polygon.png")
 }
function setup(){
engine=Engine.create()
world=engine.world
createCanvas(1000,1000)
polygon=Bodies.circle(50,500,50)
World.add(world,polygon)

slingshot=new SlingShot(polygon,{x:50,y:500})

ground=new Ground(500,980,1000,20)
ground1=new Ground(300,840,300,10)
ground2=new Ground(750,700,300,10)
box1=new Box(230,600,30,40)
box2=new Box(260,600,30,40)
box3=new Box(290,600,30,40)
box4=new Box(320,600,30,40)
box5=new Box(350,600,30,40)
box6=new Box(200,600,30,40)
box7=new Box(380,600,30,40)
box8=new Box(260,700,30,40)
box9=new Box(290,700,30,40)
box10=new Box(320,700,30,40)
box11=new Box(350,700,30,40)
box12=new Box(230,700,30,40)
box13=new Box(290,500,30,40)
box14=new Box(320,500,30,40)
box15=new Box(260,500,30,40)
box16=new Box(290,400,30,40)
box17=new Box(750,500,30,40)
box18=new Box(720,500,30,40)
box19=new Box(690,500,30,40)
box20=new Box(780,500,30,40)
box21=new Box(810,500,30,40)
box22=new Box(660,500,30,40)
box23=new Box(750,400,30,40)
box24=new Box(720,400,30,40)
box25=new Box(690,400,30,40)
box26=new Box(780,400,30,40)
box27=new Box(750,300,30,40)
box28=new Box(720,300,30,40)
box29=new Box(735,200,30,40)

}

function draw(){
    background(0)
    Engine.update(engine)

    imageMode (CENTER)
    image(polygonImage,polygon.position.x,polygon.position.y,50,50)

    
    ground.display()
    box1.display()
    box2.display()
    slingshot.display()
    box19.display()
    box20.display()
    box21.display()
    box22.display()
    box23.display()
    box24.display()
    box25.display()
    box26.display()
    box27.display()
    box28.display()
    box29.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()
    ground1.display()
    ground2.display()
    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly()
}


