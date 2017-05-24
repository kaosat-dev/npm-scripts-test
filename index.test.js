const test = require('tape')
const {doStuff} = require('./index')

test('doStuff', function (t) {
  t.plan(1)

  const expected = 'got some param 42'
  const observed = doStuff()
  t.equal(expected, observed)
})


test('doStuff(with params)', function (t) {
  t.plan(1)

  const expected = 'got some param 51'
  const observed = doStuff(51)
  t.equal(expected, observed)
})
