const fs = require('node:fs')

fs.mkdirSync('proof-cache', {recursive: true})
fs.writeFileSync(
  'proof-cache/payload.cjs',
  "console.log('fork-payload-executed-in-consume-job')\n",
  {flag: 'wx'}
)
console.log('fork-controlled payload prepared')
