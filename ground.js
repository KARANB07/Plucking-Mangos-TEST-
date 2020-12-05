class ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            density:1,
            friction:1,
            restitution:0.2
        }
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        World.add(world,this.body)
    }
    display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.height,this.width)
    }
}