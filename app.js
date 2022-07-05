const express = require('express');
const { get } = require('http');
const path = require('path');
const port = 3020;
const app = express();

app.use(express.static('public'));
app.listen(port, () => console.log('server runing in localhost://' + port));

app.get('/', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'home.html')));