function maybePad (octet) {
  var rmd = octet.length % 8
  return rmd ? '0'.repeat(8 - rmd) + octet : octet
}

function dot (a, b) {
  var len = Math.max(a.length, b.length)
  var sum = 0
  for (var i = 0; i < len; i++) sum += (a[i] || 0) * (b[i] || 0) 
  return sum
}

function base216 (octet) {
  octet = maybePad(octet)
  var dec = dot(octet.split('').map(Number), [ 128, 64, 32, 16, 8, 4, 2, 1 ])
  var hex = dec.toString(16)
  return hex.length === 2 ? hex : '0' + hex
}

function bits2bytes (bits) {
  bits = maybePad(bits)
  var octets = Array(bits.length / 8)

  for (var i = 0, o = 0; i < octets.length; i++, o += 8) {
    octets[i] = bits.slice(o, o + 8)
  }

  return octets.map(base216).join('')
}

module.exports = bits2bytes

