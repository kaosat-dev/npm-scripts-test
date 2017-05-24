const version = require('./package.json').version

console.log(`current version ${version}`)

function doStuff (param = 42) {
  return `got some param ${param}`
}

module.exports = {
  doStuff
}
