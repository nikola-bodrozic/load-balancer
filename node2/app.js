const express = require('express')
const app = express()
var os = require("os");
var hostname = os.hostname();

app.get('/', (req, res) => {
  console.log(req.headers)
  res.send('Hello World from node2, host names is ' + hostname) 
})

app.listen(4002, () => console.log('Server ready'))
