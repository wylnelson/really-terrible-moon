var asteroids = [];



function setup() {
  createCanvas(600, 600);
  for (var i = 0; i < 30; i++) {
    asteroids[i] = new Asteroid(random(250, 300), random(250, 300), random(100, 270), random(-3, 3), random(0, 360), random(20, 50), random(50, 200));
  }

}

function draw() {
  background(0);


Moon.display(300,500,30,255);

  for (var i = 0; i < asteroids.length; i++) {
    asteroids[i].display();



  }



}

function Asteroid(x, y, r, speed, rad1, radius, cc) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.speed = speed;
  this.rad1 = rad1;
  this.radius = radius;
  this.cc = cc;

  this.display = function() {
    fill(this.cc);
    ellipse(this.x + this.r * cos(radians(this.rad1)), this.y + this.r * sin(radians(this.rad1)), this.radius); //code inspired by Rodger
    this.rad1 += this.speed;
  }
}

function Moon(x1,y1,r1,cc1){
  this.x1 = x1;
  this.y1 = y1;
  this.r1 = r1;
  this.cc1 = cc1;
  
  this.display = function(){
    fill(this.cc1);
    ellipse(this.x1,this.y1,this.r1,this.r1);
  }
  
}

/*
    move= function(){
      if (keyIsDown(UP_ARROW)){
       this.y += 1 ;
      }
      if (keyIsDown(DOWN_ARROW)){
        this.y -= 1;
      }
    }
  collide= function(Asteroid) {
    var collide = dist(this.x, this.y, Asteroid.x, Asteroid.y);
    
    if (collide = 0) {
      text("YOU FAILED TO", 270, 270);
      text("NAVIGATE THE ASTEROIDS", 250, 300);
      delay(10000);
      
    }
  }
   
   
 }
 
 
 
 this.move = function(){
      this.x = this.x -1;
  
   */