const variables ={}
const functions = {};

//console.log
function talk(string) {
  console.log(string);
}

//For Loop
function forLoop(initial, constrain, body) {
  for(i = initial; i < constrain; i++) {
    body(i);
  }
}

//Create Variable
function createVariable(name, value) {
  variables[name] = value;
}

//Create Function
function createFunction(functionName, params, body) {
  const func = new Function(params, body);
  functions[functionName] = func;
}

//if Statement
function ifStatement(condition, trueBody, falseBody = '') {
  const func = new Function('aha', 'kwou', 'oruko', 'soro', 'suna', 'magana', `
    if (${condition}) { 
      ${trueBody}
    } else {
      ${falseBody} }`);
  func(variables, talk, variables, talk, variables, talk);
}

//Random

function randomGen(range) {
  return Math.floor(Math.random() * range);
}


//While Loop
function whileLoop(condition, body) {
  const func = new Function('aha', 'kwou', 'oruko', 'soro', 'suna', 'magana', `
    while (${condition}) { 
      ${body} 
    }
  `);
  func(variables, talk, variables, talk, variables, talk);
}

//typeOF

function typeOfValue(value) {
  return typeof value
}

//Igbo

const igbo = {
  aha: variables, // global variables
  oru_: functions, // global functions
  kwou: talk, // console.log
  maka: forLoop, // for loop
  ka: createVariable, // create variable
  oru: createFunction, // create function
  o_buru: ifStatement, // if statement
  gbasasia: randomGen, // random
  mgbe: whileLoop, // while loop
  udi: typeOfValue // typeOf 
}


//Yoruba

//console.log
const yoruba = {
  oruko: variables, // global variables
  ise_: functions, // global functions
  soro: talk, // console.log
  fun: forLoop, // for loop
  je_ki: createVariable, // create variable
  ise: createFunction, // create function
  ipo: ifStatement, // if statement
  laileto: randomGen, // random
  nigba_ti: whileLoop, // while loop
  iru: typeOfValue // typeOf
}

// Hausa
const hausa = {
  suna: variables, // global variables
  aiki_: functions, // global functions
  magana: talk, // console.log
  domin: forLoop, // for loop
  bari: createVariable, // create variable
  aiki: createFunction, // create function
  yanayi: ifStatement, // if statement
  bazuwar: randomGen, // random
  yayin_da: whileLoop, // while loop
  nau_in: typeOfValue // typeOf
}



module.exports = {
  igbo,
  yoruba,
  hausa
}