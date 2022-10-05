const path = require('path');

const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

// ToDo remove after routing appears
// need only to properly show pages while we have no routing in app
const pages = ['/workspace', '/profile', '/login', '/4xx', '/5xx', '/sign_in', '/change_password', '/change_info'];
pages.forEach((page) => {
  app.get(page, (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
  });
});

app.listen(3000, () => {
  console.log('Application listening on port 3000!');
});
