const test = require('tape')
const {doStuff} = require('./index')

test('doStuff', function (t) {
  t.plan(1)

  const expected = 'got some param 42'
  const observed = doStuff()
  t.equal(expected, observed)
})
