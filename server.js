var express = require('express');
var app = express();
const port = process.env.PORT || 8080;
app.use(express.static(__dirname + '/'));
//////////////////////
app.get('*', (req, res) =>{
  res.sendFile(path.resolve(__dirname, 'index.html'));
});
//////////////////////
app.listen(port);
