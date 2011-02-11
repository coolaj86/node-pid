pid
===

Install

    npm install pid

Usage

    var pider = require('pid');

    pider('node-pid'); // /tmp/node-pid.pid -- puts in /tmp with ext .pid by default

    pider('./node-pid'); // ./node-pid

    pider('/var/run/node-pid.pid'); // /var/run/node-pid.pid -- if you have permissions

Notes

  * Fails silently and without callback if you don't have write permissions to `path`
  * adds `process.on('exit', fn)` event to unlink the pid file on quit
