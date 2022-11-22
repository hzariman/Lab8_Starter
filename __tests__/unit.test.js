// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Function isPhoneNumber() Test 1: TRUE', () => {
    expect(functions.isPhoneNumber("858-463-9973")).toBe(true);
  });

  test('Function isPhoneNumber() Test 2: TRUE', () => {
    expect(functions.isPhoneNumber("(716)-996-2973")).toBe(true);
  });

  test('Function isPhoneNumber() Test 3: FALSE', () => {
    expect(functions.isPhoneNumber("CSE110XD")).toBe(false);
  });

  test('Function isPhoneNumber() Test 4: FALSE', () => {
    expect(functions.isPhoneNumber("8-46-9973")).toBe(false);
  });

  test('Function isEmail() Test 1: TRUE', () => {
    expect(functions.isEmail("hzari@gmail.com")).toBe(true);
  });

  test('Function isEmail() Test 2: TRUE', () => {
    expect(functions.isEmail("mqmegatz@ucsd.edu")).toBe(true);
  });

  test('Function isEmail() Test 3: FALSE', () => {
    expect(functions.isEmail("CSE110XD")).toBe(false);
  });

  test('Function isEmail() Test 4: FALSE', () => {
    expect(functions.isEmail("8-46")).toBe(false);
  });

  test('Function isStrongPassword() Test 1: TRUE', () => {
    expect(functions.isStrongPassword("Strongass")).toBe(true);
  });

  test('Function isStrongPassword() Test 2: TRUE', () => {
    expect(functions.isStrongPassword("VewwyStwong")).toBe(true);
  });

  test('Function isStrongPassword() Test 3: FALSE', () => {
    expect(functions.isStrongPassword("no")).toBe(false);
  });

  test('Function isStrongPassword() Test 4: FALSE', () => {
    expect(functions.isStrongPassword("lol")).toBe(false);
  });

  test('Function isDate() Test 1: TRUE', () => {
    expect(functions.isDate("11/21/2022")).toBe(true);
  });

  test('Function isDate() Test 2: TRUE', () => {
    expect(functions.isDate("2/13/2002")).toBe(true);
  });

  test('Function isDate() Test 3: FALSE', () => {
    expect(functions.isDate("not a date")).toBe(false);
  });

  test('Function isDate() Test 4: FALSE', () => {
    expect(functions.isDate(":(")).toBe(false);
  }); 

  test('Function isHexColor() Test 1: TRUE', () => {
    expect(functions.isHexColor("#630399")).toBe(true);
  });

  test('Function isHexColor() Test 2: TRUE', () => {
    expect(functions.isHexColor("#5177ac")).toBe(true);
  });

  test('Function isHexColor() Test 3: FALSE', () => {
    expect(functions.isHexColor("not a hex")).toBe(false);
  });

  test('Function isHexColor() Test 4: FALSE', () => {
    expect(functions.isHexColor("sleep")).toBe(false);
  }); 
  
