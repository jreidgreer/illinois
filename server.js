const express = require('express');
const app = express();
const path = require('path');

// Load config files
const config = require('./config');

app.use(express.static('client'));

app.get('**/:filename.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/css', `${req.params.filename}.css`));
});

app.get('**/:filename.css.map', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/css', `${req.params.filename}.css.map`));
});

app.get('**/:filename.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/js', `${req.params.filename}.js`));
});

app.get('**/:filename.js.map', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/js', `${req.params.filename}.js.map`));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

// Set a process title to allow for easy kill commands
process.title = config.title;

app.listen(config.port, () => console.log(`${config.name} listening on port ${config.port}!`));
