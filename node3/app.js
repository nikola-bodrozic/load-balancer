const express = require('express')
const app = express()
var os = require("os");
var hostname = os.hostname();

app.get('/', (req, res) => {
  console.log(req.headers)
  res.send('Hello from canary, host names is ' + hostname + "\n") 
})

app.listen(4003, () => console.log('Server ready'))
