// require('utils.js');

function MovingObject(pos, game, vel, radius, color) {
  this.pos = pos;
  this.vel = vel;
  this.radius = radius;
  this.color = color;
  this.game = game;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
  ctx.fill();
};

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  this.pos = this.game.wrap(this.pos);
};

MovingObject.prototype.distance = function(otherObject){
  let x = this.pos[0] - otherObject.pos[0];
  let y = this.pos[1] - otherObject.pos[1];
  return Math.sqrt((x * x) + (y * y));
};

MovingObject.prototype.isCollidedWith = function(object) {
};

module.exports = MovingObject;
