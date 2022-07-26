global.owner = ['3319046619',''] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: '꧁ʚ𝕊𝕆ℕ❖𝕘𝕠𝕜𝕦ɞ꧂'
  nrtm: 'https://bot❖goku.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'Masukkan_Apikey'
}

// Sticker WM
global.packname = 'I hope you\'Subscribe'
global.author = '꧁ʚ𝕤𝕠𝕟❖𝕘𝕠𝕜𝕦ɞ꧂'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
