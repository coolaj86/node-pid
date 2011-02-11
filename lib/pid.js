(function () {
  "use strict";

  var fs = require('fs'); 

  module.exports = function (path) {
    if (!/\//.test(path)) {
      if (!/\.pid/.test(path)) {
        path += '.pid';
      }
      path = '/tmp/' + path;
    }

    fs.writeFile(path, process.pid.toString() + '\n');
    process.on('exit', function () {
      fs.unlink(path);
    });
  };

}());
