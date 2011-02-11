(function () {
  "use strict";

  var exec = require('child_process').exec,
    pider = require('pid');

  pider('node-pid-test');
  pider('./node-pid-test2');
  pider('./node-pid-test3.pid');
  pider('node-pid-test4.pid');
  setTimeout(function () {
    exec("ls ./ /tmp | grep node", function (err, stdout, stderr) {
      console.log(stdout);
    });
  }, 100);
}());
