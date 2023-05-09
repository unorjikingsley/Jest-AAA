const { stringLength, reverseString, Calculator, Greeting, capitalize } = require("./index.js");

// test('returns the correct string length', () => {
//   expect(stringLength('')).toBe(0)
//   expect(stringLength('a')).toBe(1)
//   expect(stringLength('Hello, World!')).toBe(13)
//   expect(stringLength('john123')).toBe(7)
// });

describe('stringLength', () => {
  test('returns the correct string length', () => {
    expect(stringLength('a')).toBe(1);
    expect(stringLength('World!7890')).toBe(10);
    expect(stringLength('john123')).toBe(7);
  });

  test('throw an error for input less than one', () => {
    expect(() => {
      stringLength('');
    }).toThrow('Input string must be between 1 to 10 characters long');
  });

  test('throw an error for input less than one', () => {
    expect(() => {
      stringLength('jhbvkanhvgvhszmnuksydfahdbc');
    }).toThrow('Input string must be between 1 to 10 characters long');
  });
});

test('Input should be reversed', () => {
  const input = 'hello';
  const expectedOutput = 'olleh';
  const actualOutput = reverseString(input);
  expect(actualOutput).toEqual(expectedOutput);
});

test('it should have the correct greetings when the name is supplied', () => {
  const greeting = new Greeting();
  const name = "adam";
  const result = greeting.hello(name);
  expect(result).toBe("Hello adam");
})

describe('Calculator', () => {
  describe('add', () => {
    it('should add two positive numbers', () => {
      const calculator = new Calculator()
      expect(calculator.add(2, 3)).toBe(5);
    })

    it('should add a positive number and a negative number', () => {
      const calculator = new Calculator()
      expect(calculator.add(2, -3)).toBe(-1);
    })

    it('should add two negative numbers', () => {
      const calculator = new Calculator();
      expect(calculator.add(-2, -3)).toBe(-5);
    })

    it('should add zero and a number', () => {
      const calculator = new Calculator()
      expect(calculator.add(0, 3)).toBe(3)
    })
  })

  describe('subtract', () => {
    it('should subtract two positive numbers', () => {
      const calculator = new Calculator();
      expect(calculator.subtract(3, 2)).toBe(1)
    })

    it('should subtract a positive and a negative number', () => {
      const calculator = new Calculator()
      expect(calculator.subtract(3, -2)).toBe(5)
    })

    it('should subtract two negative numbers', () => {
      const calculator = new Calculator()
      expect(calculator.subtract(-3, -2)).toBe(-1)
    })

    it('should subtract a number from zero', () => {
      const calculator = new Calculator();
      expect(calculator.subtract(0, 3)).toBe(-3);
    })
  })

  describe('divide', () => {
    it('should divide two positive numbers', () => {
      const calculator = new Calculator()
      expect(calculator.divide(6, 3)).toBe(2)
    })

    it('should divide a positive and a negative number', () => {
      const calculator = new Calculator()
      expect(calculator.divide(6, -3)).toBe(-2)
    })

    it('should divide two negative numbers', () => {
      const calculator = new Calculator()
      expect(calculator.divide(-6, -3)).toBe(2)
    })

    it('should throw an error if dividing by zero', () => {
      const calculator = new Calculator()
      expect(() => calculator.divide(6, 0)).toThrow('Division by zero')
    })
  })

  describe('multiply', () => {
    it('should multiply two positive numbers', () => {
      const calculator = new Calculator()
      expect(calculator.multiply(2, 3)).toBe(6)
    })

    it('should multiply a positive and a negative number', () => {
      const calculator = new Calculator()
      expect(calculator.multiply(2, -3)).toBe(-6)
    })

    it('should multiply two negative numbers', () => {
      const calculator = new Calculator()
      expect(calculator.multiply(-2, -3)).toBe(6)
    })

    it('should multiply a number by zero', () => {
      const calculator = new Calculator()
      expect(calculator.multiply(3, 0)).toBe(0)
    })
  })
})

describe('capitalize', () => {
  test('Input first letter must be capitalized', () => {
    expect(capitalize('table')).toBe('Table')
    expect(capitalize('hello world')).toBe('Hello world')
    // expect(capitalize('')).toBe('')
    expect(capitalize('123')).toBe('123')
  })

  test('throw an error for input not a string', () => {
    expect(() => {
      capitalize(675)
    }).toThrow('Input must be a string')
  })

  test('Empty Input returns an empty string', () => {
    expect(capitalize('')).toBe('');
  })
})
