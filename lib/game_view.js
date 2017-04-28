const Game = require('./game.js');
const key = require('./keymaster.js');

function GameView (ctx) {
  this.ctx = ctx;
  this.game = new Game();
}

GameView.prototype.start = function() {
  const g = this;
  g.bindKeyHandlers();
  setInterval(function() {
    g.game.moveObjects();
    g.game.draw(g.ctx);
    g.game.checkCollisions();
  }, 20);
};

GameView.prototype.bindKeyHandlers = function() {
  const g = this;
  key('up', function() {
    g.game.ship.power([0,-3]);
  });
  key('down', function() {
    g.game.ship.power([0,3]);
  });
  key('left', function() {
    g.game.ship.power([-3,0]);
  });
  key('right', function() {
    g.game.ship.power([3,0]);
  });
};

module.exports = GameView;
