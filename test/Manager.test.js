var manager = require("../lib/manager");
//var Employee = require("../lib/Employee");

test("Can set office number via varructor argument", () => {
  var testValue = 100;
  var e = new manager("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  var testValue = "Manager";
  var e = new manager("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  var testValue = 100;
  var e = new manager("Foo", 1, "test@test.com", 100);
  expect(e.getOfficeNumber()).toBe(testValue);
});