(function() {
  var timer;
  require.paths.unshift(__dirname);
  timer = require('../timer.js').timer;
  (function() {
    var clear, clear2;
    timer(150, function() {
      return console.log('hello');
    });
    setTimeout((function() {
      return console.log('hello #2');
    }), 150);
    clear = timer(null, 200, function() {
      return console.log('hello world');
    }).clear;
    timer(1500, clear);
    clear2 = setInterval((function() {
      return console.log('hello world #2');
    }), 200);
    return setTimeout((function() {
      return clearInterval(clear2);
    }), 1500);
  })();
  timer(2000, function() {
    var clear, ret;
    clear = timer([100, 150, 200, 500], function() {
      return console.log((Date.now() % 60000) + ': hello you');
    }).clear;
    timer(800, clear);
    ret = timer({
      auto: 1
    }, 60000, function() {
      return console.log('BONG: ' + new Date);
    });
    return timer(60000 * 60, ret.clear);
  });
}).call(this);
