class stone{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.1,
            friction:1,
            density:1.2
        }
        this.radius=radius
        this.x=x
        this.y=y
        this.image=loadImage("stone.png");
        this.body=Bodies.circle(this.x,this.y,this.radius,options)
        World.add(world,this.body);
        
    }
    display(){
        var pos=this.body.position
        
        ellipseMode(RADIUS);
        circle(pos.x,pos.y,this.radius,)
        image(this.image,pos.x-65,pos.y-70,110,110)
    }

}