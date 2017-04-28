const Util = require('./utils.js');
const MovingObject = require('./moving_object.js');

Util.inherits(Ship, MovingObject);

Ship.RADIUS = 10;
Ship.COLOR = 'blue';

function Ship(game) {
  MovingObject.call(this, [400,300], game, [0,0]);
  this.radius = Ship.RADIUS;
  this.color = Ship.COLOR;
}

Ship.prototype.relocate = function(){
  let x = 740 * Math.random() + 30;
  let y = 540 * Math.random() + 30;
  this.pos = [x, y];
  this.vel = [0, 0];
};

Ship.prototype.speed = function() {
  let x = this.vel[0];
  let y = this.vel[1];
  return Math.sqrt((x * x) + (y * y));
};

Ship.prototype.power = function(impulse){
  // if (this.speed() < 10) {
  //   if(impulse[0] >= 0 || impulse[1] >= 0){
  this.vel[0] += impulse[0];
  this.vel[1] += impulse[1];
  //   }
  // }
};

module.exports = Ship;
