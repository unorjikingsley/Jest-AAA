function stringLength(string) {
  if (string.length < 1 || string.length > 10) {
    throw new Error('Input string must be between 1 to 10 characters long')
  }

  return string.length;

  // let count = 0;
  // for (let i = 0; i < string.length; i++){
  //   count++;
  // }
  // return count;
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

class Greeting {
  hello(name) {
    return "Hello " + name;
  }
}

class Calculator {
  add(a, b) {
    return a + b
  }

  subtract(a, b) {
    return a - b
  }

  multiply(a, b) {
    return a * b
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  }
}

function capitalize(string) {
  if(typeof string !== 'string'){
    throw new Error('Input must be a string')
  }
  if (string.length === 0) {
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
  Greeting,
  Calculator,
  stringLength,
  reverseString,
  capitalize
};