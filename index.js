const path = require('path');

const express = require('express');

const { port } = require('./config');

const DEFAULT_PORT = 3000;

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

// ToDo remove after routing appears
// need only to properly show pages while we have no routing in app
app.get('/workspace/:id', (req, res) => {
  res.redirect('/workspace');
});

const pages = ['/workspace',
  '/profile', '/login',
  '/4xx', '/5xx',
  '/signup',
  '/change_password',
  '/change_info',
];

pages.forEach((page) => {
  app.get(page, (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
  });
});

const resPort = port || DEFAULT_PORT;

app.listen(resPort, () => {
  // eslint-disable-next-line no-console
  console.log(`Application listening on port ${resPort}!`);
});
