
const path = require('path')
const fs = require('fs')

const buildFile = path.resolve(__dirname, '..', 'build', 'main.js')
console.log('Checking if Build is Finished: ', buildFile)

function checkBuild () {
  if (fs.existsSync(buildFile)) {
    console.log('Done')
  } else {
    console.log('Build Not Finished - Sleep 1')
    setTimeout(checkBuild, 1000)
  }
}

checkBuild()
