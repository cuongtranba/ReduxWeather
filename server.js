var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));
//////////////////////
app.get('*', (req, res) =>{
  res.sendFile(path.resolve(__dirname, 'index.html'));
});
//////////////////////
app.listen(port);
