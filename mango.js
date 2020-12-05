class mango{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0,
            friction:1

        }
        this.x=x
        this.y=y
        this.radius=35
        this.image=loadImage("mango.png")
        this.body=Bodies.circle(this.x,this.y,this.radius)
        World.add(world,this.body)
    }
    display(){
        ellipseMode(CENTER)
        circle(this.x,this.y,this.radius)
        imageMode(CENTER)
        image(this.image,this.x+10,this.y,60,60)
        
    }
}