const express = require('express')
const app = express()
var os = require("os");
var hostname = os.hostname();

app.get('/', (req, res) => res.send('Hello World from ' + hostname))
app.listen(4001, () => console.log('Server ready'))
