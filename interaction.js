const express = require('express')
const app = express()
const path = require('path')
const fs = require('file-extra');
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`))
app.use(express.static('public'));

console.log('hai')


// function getValue() {
//     const playerName = document.getElementById('player-name').value
//     alert(playerName)
//     const addToList = document.querySelector('li')
//     addToList.textContent = playerName
// }
// console.log(addPlayer)