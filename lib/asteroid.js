const MovingObject = require('./moving_object.js');
const Util = require('./utils.js');
const Ship = require('./ship.js');
Util.inherits(Asteroid, MovingObject);

function Asteroid(pos, game) {
  MovingObject.call(this, pos, game, Util.randomVec(5));
  this.color = Asteroid.COLOR;
  this.radius = Asteroid.RADIUS;
}

Asteroid.prototype.isCollidedWith = function(object) {
  if (this.distance(object) < (this.radius + object.radius)) {
    if(object instanceof Ship){
      object.relocate();
    }
  }
};

Asteroid.RADIUS = 30;
Asteroid.COLOR = 'pink';

// const a = new Asteroid([1,1]);
// console.log(a);
module.exports = Asteroid;
