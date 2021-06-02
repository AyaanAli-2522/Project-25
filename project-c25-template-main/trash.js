class trash{
constructor(x,y){
this.Image=loadImage("paper.png")
var options={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2
}

World.add(world,this.body)
}

display();
}