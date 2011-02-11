pid
===

Install

    npm install pid

Usage

    var pider = require('pid');

    pider('node-pid'); // /tmp/node-pid.pid -- puts in /tmp with ext .pid by default

    pider('./node-pid'); // ./node-pid

    pider('/var/run/node-pid.pid'); // /var/run/node-pid.pid -- if you have permissions
