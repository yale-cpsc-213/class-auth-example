const express = require('express');

const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));
const view = require('./views.js');
const models = require('./models.js');

app.get('/', (req, res) => {
  res.send(view);
});
app.post('/', (req, res) => {
  console.log(`trying to log in ${req.body.username}`);
  const user = models.getUserByUsername(req.body.username);
  if (req.body.password === user.password) {
    // set cookie
  }
  res.send(view);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
