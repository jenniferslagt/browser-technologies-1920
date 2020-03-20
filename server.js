const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs-extra');
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`))
app.use(express.static('public'));

console.log('hai')

fs.readFile('./readMe.txt', 'utf8')