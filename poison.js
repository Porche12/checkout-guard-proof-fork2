const crypto = require('node:crypto')
const value = process.env.SECOND_JOB_CANARY
if (!value) throw new Error('Second-job canary unavailable')
const digest = crypto.createHash('sha256').update(value, 'utf8').digest('hex')
if (digest !== 'fa4f5487706c54b2e522410f69b155dc254939f702b7678df18053e6b168d1a0') throw new Error('Second-job canary digest mismatch')
console.log('SECOND_JOB_CANARY_SHA256_MATCH=true')
