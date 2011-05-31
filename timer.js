(function() {
  var clearTimer;
  exports.timer = function(timeouts, interval, cb) {
    var entry, setup, timeouts_i, timeouts_l;
    if (cb === void 0) {
      cb = interval;
      interval = null;
    }
    if ((timeouts != null ? timeouts.auto : void 0) || timeouts === void 0) {
      timeouts = [interval - Date.now() % interval];
    } else if (typeof timeouts === 'number') {
      timeouts = [timeouts];
    }
    timeouts_l = (timeouts != null ? timeouts.length : void 0) || 0;
    timeouts_i = 0;
    entry = {
      clear: function() {
        return clearTimer(entry);
      }
    };
    (setup = function(call) {
      if (call) {
        cb();
      }
      if (timeouts_i < timeouts_l) {
        return entry.timeout = setTimeout(setup, timeouts[timeouts_i++], true);
      } else if (interval != null) {
        delete entry.timeout;
        return entry.interval = setInterval(cb, interval);
      }
    })();
    return entry;
  };
  exports.clearTimer = clearTimer = function(entry) {
    if (entry != null ? entry.timeout : void 0) {
      clearTimeout(entry.timeout);
      delete entry.timeout;
    }
    if (entry != null ? entry.interval : void 0) {
      clearInterval(entry.interval);
      return delete entry.interval;
    }
  };
}).call(this);
