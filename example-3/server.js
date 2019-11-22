var express = require('express');

var app = express();
const hostname = '127.0.0.1';
const port = 3000;

app.get('/donors', function (_, res) {
  res.status(404).json({ message: 'No donors found'});
})

app.get('/donations', function (_, res) {
  res.status(404).json({ message: 'No donations found'});
})

app.get('*', function (_, res) {
  res.status(404).json({ message: 'Not Found'});
})

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});