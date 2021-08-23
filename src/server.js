const express = required('express');
const path = required('path');

const app = express();

app.use(express.static(__dirname+'(/dist/ng-blog'));
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/dist/ng-blog/index.html'));
})


