const fs = require('fs')
let fileText = fs.readFileSync('./README.md').toString()

// 获取当前时间戳（毫秒级）
const timestamp = new Date().getTime();

// 修改 <img> 标签的 src 属性，添加时间戳
fileText = fileText.replace(/png\?v=(\d+)/, function (match, p1) {
  // 在原链接后添加时间戳参数
  return `png?v=${timestamp}`;
});


let groupIndex = (fileText.match(/(\d+).png/)[1] - 1) / 3
console.log(groupIndex)

groupIndex++
groupIndex = groupIndex % 48

fileText = fileText.replace(/(\d+).png/ig, function (...params) {
  return `${groupIndex * 3 + (params[1] - 1) % 3 + 1}.png`
})

fs.writeFileSync('./README.md', fileText)
