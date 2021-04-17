const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;


function setup(){
   createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world; 

     shooter = new boxee(100,450,50,50,"green");

     var options = {
        length : 5 ,
        bodyA : shooter.body ,
        pointB : {x : 150 , y : 450 }  ,
        stiffness : 0.2 
      }

    constrait = Constraint.create(options)

    World.add(world,constrait)
    //console.log(constrait)

    base1 = new ground(1000,400,300,20,"white");
    //base2 = new ground(100,500,100,20,"white");

    // boxes
     box1 = new boxee(880,330,30,30,"red");
     box2 = new boxee(910,330,30,30,"red");
     box3 = new boxee(940,330,30,30,"red");
     box4 = new boxee(970,330,30,30,"red");
     box5 = new boxee(1000,330,30,30,"red");
     box6 = new boxee(1030,330,30,30,"red");
     box7 = new boxee(1060,330,30,30,"red");
     box8 = new boxee(1090,330,30,30,"red");
     box9 = new boxee(1120,330,30,30,"red");
     
     box10 = new boxee(895,300,30,30,"red");
     box11 = new boxee(925,300,30,30,"red");
     box12 = new boxee(955,300,30,30,"red");
     box13 = new boxee(985,300,30,30,"red");
     box14 = new boxee(1015,300,30,30,"red");
     box15 = new boxee(1045,300,30,30,"red");
     box16 = new boxee(1075,300,30,30,"red");
     box17 = new boxee(1105,300,30,30,"red");

     box18 = new boxee(1000,200,20,50,"white");
     box19 = new boxee(950,200,20,50,"white");
     box20 = new boxee(1050,200,20,50,"white");

     box21 = new boxee(1000,100,100,20,"red");
     box22 = new boxee(1000,95,100,5,"white")
     box23 = new boxee(1000,90,100,5,"red")
     box24 = new boxee(1000,80,100,5,"white")
}
function draw(){
    background("black");
    Engine.update(engine);

    shooter.show();

    base1.show();
    //base2.show();

    box1.show();
    box2.show();
    box3.show();
    box4.show();
    box5.show();
    box6.show();
    box7.show();
    box8.show();
    box9.show();

    box10.show();
    box11.show();
    box12.show();
    box13.show();
    box14.show();
    box15.show();
    box16.show();
    box17.show();

    box18.show();
    box19.show();
    box20.show();

    box21.show();
    box22.show();
    box23.show();
    box24.show();
   
}

function ground(x,y,w,h,color) {
    this.x = x ;
    this.y = y ;
    this.w = w ;
    this.h = h ;
    this.color = color ;
    this.options = {
       isStatic : true
    }
    this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, this.options);
    
    World.add(world, this.body);

    this.show = function(){
      //  this.angle = this.body.angle;
        this.pos = this.body.position
        push()
       // rotate(this.angle);
          rectMode(CENTER)
          fill(this.color)
          rect(this.pos.x,this.pos.y,this.w,this.h)
        pop()
    }
}
function boxee(x,y,w,h,color) {
    this.x = x ;
    this.y = y ;
    this.w = w ;
    this.h = h ;
    this.color = color ;
    this.options = {
        'friction':1.0,
    }
    this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, this.options);
    
    World.add(world, this.body);

    this.show = function(){
        var angle = this.body.angle;
        this.pos = this.body.position
        push()
          rectMode(CENTER)
        //rotate(angle);
          translate(this.pos.x,this.pos.y)
          fill(this.color)
          rect(0,0,this.w,this.h)
        pop()
    }
}
function mouseDragged() {
    //console.log(shooter.body)
    Matter.Body.setPosition(shooter.body,{x : mouseX ,y : mouseY})
}
function mouseReleased() {
    //console.log(constrait)
    constrait.bodyA = null
}
function keyPressed() {
    if (keyCode == 32){
        Matter.Body.setPosition(shooter.body,{x : 100 , y : 450})
        constrait.bodyA = shooter.body;
    }
}