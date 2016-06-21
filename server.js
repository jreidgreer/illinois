const express = require('express');
const app = express();

// Load config files
const config =  require('./config');

app.use(express.static('client'));

app.listen(config.port, function () {
  console.log(`${config.name} listening on port ${config.port}!`);
});
