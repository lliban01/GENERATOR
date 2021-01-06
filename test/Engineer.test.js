const engineer = require("../lib/engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new engineer("Foo", 1, "test@test.com",  testValue);
  expect(e.gitHub).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new engineer("Foo", 1, "test@test.com",  "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new engineer("Foo", 1, "test@test.com",  testValue);
  expect(e.getGitHub()).toBe(testValue);
});