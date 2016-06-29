const path = require('path');
const staticFiles = require('./config').staticFiles;

module.exports = (app, express) => {
  app.use(express.static(path.join(__dirname, staticFiles)));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, staticFiles, 'index.html'));
  });
};
