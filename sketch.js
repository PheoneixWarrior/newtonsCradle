const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var sling1, sling2, sling3, sling4,sling5,sling6
var pendulem1,pendulem2,pendulem3,pendulem4,pendulem5, pendulem6




function setup(){
    canvas = createCanvas(1200,1200);
    engine = Engine.create();
    world = engine.world;
   
    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
      mouse:canvasmouse
    };
    mConstraint = MouseConstraint.create(engine,options);
    World.add(world, mConstraint);

    pendulem1 = new Pendulem(200,800,"red")
    pendulem2 = new Pendulem(230,800,"orange")
    pendulem3 = new Pendulem(260,800,"yellow")
    pendulem4 = new Pendulem(290,800,"green")
    pendulem5 = new Pendulem(320,800,"blue")
    pendulem6 = new Pendulem(350,800,"purple")

    sling1 = new Sling(pendulem1,{x:200,y:100})
    sling2 = new Sling(pendulem2,{x:230,y:100})
    sling3 = new Sling(pendulem3,{x:260,y:100})
    sling4 = new Sling(pendulem4,{x:290,y:100})
    sling5 = new Sling(pendulem5,{x:320,y:100})
    sling6 = new Sling(pendulem6,{x:350,y:100})




}

function draw(){
    background("lightblue");
    Engine.update(engine);

pendulem1.display();
pendulem2.display();
pendulem3.display();
pendulem4.display();
pendulem5.display();
pendulem6.display();

sling1.display();
sling2.display();
sling3.display();
sling4.display();
sling5.display();
sling6.display();


    
}

function mouseDragged(){
  Matter.Body.setPosition(pendulem1.body, {x:mouseX, y:mouseY})
}


