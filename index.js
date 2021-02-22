const fs = require('fs')
let fileText = fs.readFileSync('./README.md').toString()

let groupIndex = (fileText.match(/(\d+).png/)[1] - 1) / 3
console.log(groupIndex)

groupIndex++
fileText = fileText.replace(/(\d+).png/ig, function(...params) {
  return `${groupIndex * 3 + (params[1] - 1) % 3 + 1 }.png`
})

fs.writeFileSync('./README.md', fileText)
