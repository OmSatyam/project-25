class Paper{
   constructor(x,y,width,height){
     var options = {
        'isStatic': false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
     }  
   this.body = Matter.Bodies.rectangle(x,y,width,height,options);
   this.image = loadImage("paper.png")
   this.width = width;
   this,height = height;
   World.add(world,this.body);
   }

display(){
    var pos = this.body.position;
    fill("pink");
    push();
    translate(pos.x,pos.y);
    imageMode(RADIUS);   
    image(this.image,0,0,this.width,this.height);
    pop();
}
}

