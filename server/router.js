const path = require('path');

module.exports = (app, express) => {
  app.use(express.static('../client'));

  app.get('**/:filename.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/css', `${req.params.filename}.css`));
  });

  app.get('**/:filename.css.map', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/css', `${req.params.filename}.css.map`));
  });

  app.get('**/:filename.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/js', `${req.params.filename}.js`));
  });

  app.get('**/:filename.js.map', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/js', `${req.params.filename}.js.map`));
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', 'index.html'));
  });
};
