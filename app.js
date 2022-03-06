const cfg = require('./src/config');
const watchdog = require('./src/watchdog');
const server = require('./server');

watchdog.phoneNumbersWatchdog();

server.listen(cfg.port, function(req,res) {
   console.log(req.headers.host);
  console.log(
    `Starting sample-conversations-masked-numbers at http://localhost:${cfg.port}`
  );
});
