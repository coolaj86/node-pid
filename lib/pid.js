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
    fs.unlinkSync(path);
  });
};

process
  .on('SIGINT', process.exit)
  .on('SIGTERM', process.exit)
  .on('SIGQUIT', process.exit)
  .on('SIGKILL', process.exit);
