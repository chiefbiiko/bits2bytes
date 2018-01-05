var tape = require('tape')

var bits2bytes = require('./index')

tape('bits2bytes', function (t) {

  t.is(bits2bytes('00100100'), '24', '36 forever')
  
  t.end()
})

tape('multiple bytes', function (t) {

  t.is(bits2bytes('0010010000101100'), '242c')

  t.end()
})

tape('padding', function (t) {

  t.is(bits2bytes('101'), '05', 'got padded')
  t.is(bits2bytes('00000101'), '05', 'hex encoded byte')

  t.end()
})
