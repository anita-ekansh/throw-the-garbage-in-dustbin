class Ball {
    constructor(x, y) {
      var options = {
          isStatic : false,
          'restitution':0.6,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 40, options);
      this.radius = 40;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke("orange");
      strokeWeight(4)
      fill("red");
      circle(0, 0, 40);
      pop();
    }
  };
  