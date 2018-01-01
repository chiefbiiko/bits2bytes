var tape = require('tape')

var bits2octets = require('./index')

tape('bits2octets', function (t) {

  var octet = bits2octets('101')

  t.is(octet, '05', 'hex encoded string octet')

  t.end()
})
