const GameView = require('./game_view.js');

document.addEventListener('DOMContentLoaded', function() {
  let canvas = document.getElementById('game-canvas');
  let ctx = canvas.getContext('2d');
  new GameView(ctx).start();
});
