function ikwo(string) {
  return console.log(string);
}

function maka(initial, constrain, body) {
  for(i = initial; i < constrain; i++) {
    console.log(body);
  }
}

module.exports = {
  ikwo,
  maka
}