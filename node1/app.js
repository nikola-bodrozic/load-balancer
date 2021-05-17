const express = require('express')
const app = express()
var os = require("os");
var hostname = os.hostname();

app.get('/', (req, res) => {
  console.log(req.headers)
  res.send('Hello World from ' + hostname) 
})

app.listen(4000, () => console.log('Server ready'))
