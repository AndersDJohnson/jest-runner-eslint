const runJest = require('./runJest');

it("Doesn't override parser when not set", () => {
  return expect(runJest('custom-parser')).resolves.toMatchSnapshot();
});
