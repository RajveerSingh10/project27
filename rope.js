class rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetY
        this.offsetY=offsetYvar options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }

        }
        this.rope=Constraint.create(options);
        World.add(world,this.rope);

        rope1= new rope(bobObject1.body,roofObject.body,_bobDiameter*2,0)


        
    }
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}