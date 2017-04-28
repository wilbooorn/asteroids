const Asteroid = require('./asteroid.js');
const Ship = require('./ship.js');

Game.DIM_X = 800;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 0;

function Game() {
  this.asteroids = [];
  this.ship = new Ship(this);
  this.addAsteroids();
  this.allObjects = this.asteroids.concat(this.ship);
}

Game.prototype.randomPosition = function() {
  let x = Math.random() * Game.DIM_X;
  let y = Math.random() * Game.DIM_Y;
  return [x,y];
};

Game.prototype.addAsteroids = function () {
  for(let i = 0; i < Game.NUM_ASTEROIDS; i++){
    let pos = this.randomPosition();
    this.asteroids.push(new Asteroid(pos, this));
  }
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, 800, 600);
  this.allObjects.forEach(function(object) {
    object.draw(ctx);
  });
};

Game.prototype.moveObjects = function() {
  this.allObjects.forEach(function(object) {
    object.move();
  });
};

Game.prototype.wrap = function(pos) {
  if (pos[0] <= -30) {
    pos[0] = 800;
    return pos;
  } else if (pos[0] >= 830) {
    pos[0] = 0;
    return pos;
  } else if (pos[1] <= -30) {
    pos[1] = 600;
    return pos;
  } else if (pos[1] >= 630) {
    pos[1] = 0;
    return pos;
  }
  return pos ;
};

Game.prototype.checkCollisions = function() {
  const that = this;
  this.asteroids.forEach( function(asteroid){
    asteroid.isCollidedWith(that.ship);
  });
};

Game.prototype.remove = function(asteroidIdx) {
  this.allObjects.splice(asteroidIdx, 1);
};

module.exports = Game;
