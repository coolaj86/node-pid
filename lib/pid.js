(function () {
  "use strict";

  var fs = require('fs');
  var _path;

  module.exports = function (path) {
    if(typeof path === 'undefined') {
      return _path;
    }

    if (!/\//.test(path)) {
      if (!/\.pid/.test(path)) {
        path += '.pid';
      }
      path = '/tmp/' + path;
    }

    _path = path;

    fs.writeFile(path, process.pid.toString() + '\n');
    process.on('exit', function () {
      fs.unlink(path);
    });
  };

}());
