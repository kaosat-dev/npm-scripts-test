const version = require('./package.json').version

function doStuff (param = 42) {
  return `got some param ${param}`
}

function runAsScript () {
  console.log(`current version ${version}`)
}

module.exports = {
  doStuff,
  runAsScript,
  version
}
