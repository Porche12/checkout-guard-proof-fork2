const fs = require('node:fs')

if (process.env.SECOND_JOB_CANARY) {
  throw new Error('The first job unexpectedly received the canary')
}

fs.mkdirSync('proof-cache', {recursive: true})
fs.writeFileSync(
  'proof-cache/payload.cjs',
  [
    "if (!process.env.SECOND_JOB_CANARY) throw new Error('Second-job canary unavailable')",
    "console.log('SECOND_JOB_CANARY_PRESENT=true')",
    ''
  ].join('\n'),
  {flag: 'wx'}
)

console.log('cache payload prepared from fork branch')
