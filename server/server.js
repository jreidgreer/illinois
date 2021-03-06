const express = require('express');
const app = express();

// Load config files
const config = require('./config');

// Use router file
require('./router')(app, express);

// Set a process title to allow for easy kill commands
process.title = config.title;

app.listen(config.port, () => console.log(`${config.name} listening on port ${config.port}!`));
