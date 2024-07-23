export default function ikwo(string) {
  return console.log(string);
}

export default function maka(initial, constrain, body) {
  for(i = initial; i < constrain; i++) {
    console.log(body);
  }
}
