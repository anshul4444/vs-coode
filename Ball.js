class Ball{
    constructor(x,y,radius){
        var options = {
            'restitution':0.4,
            'friction':1.0,
            'density':0.2,
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill(176, 219, 83);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}