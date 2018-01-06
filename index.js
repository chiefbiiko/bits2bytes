function maybePad (bits, len) {
  var rmd = bits.length % (len || 8)
  return rmd ? '0'.repeat((len || 8) - rmd) + bits : bits
}

function dot (a, b) {
  var len = Math.max(a.length, b.length)
  var sum = 0
  for (var i = 0; i < len; i++) sum += (a[i] || 0) * (b[i] || 0) 
  return sum
}

function binary2decimal (bits) {
  bits = maybePad(bits)
  var dec = dot(bits.split('').map(Number), [ 128, 64, 32, 16, 8, 4, 2, 1 ])
  return dec
}

function decimal2hexadecimal (dec) {
  var hex = dec.toString(16)
  return hex.length === 2 ? hex : '0' + hex
}

function binary2hexadecimal (bits) {
  return decimal2hexadecimal(binary2decimal(bits))
}

function bits2bytes (bits) {
  bits = maybePad(bits)
  var bytes = Array(bits.length / 8)

  for (var i = 0, o = 0; i < bytes.length; i++, o += 8) {
    bytes[i] = bits.slice(o, o + 8)
  }

  return bytes.map(binary2hexadecimal).join('')
}

module.exports = bits2bytes

