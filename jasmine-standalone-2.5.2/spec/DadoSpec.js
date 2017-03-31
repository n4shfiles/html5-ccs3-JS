describe("isNull", function() {


beforeEach(function() {

});

  it("it does nor return null", function() {
    expect(rollDice()).not.toBe(null);
  });

  it("it does  return an integer", function() {
    expect(rollDice()).toMatch(/\d{1,}/);
  });

  it("it returns a number greater than 0", function() {
    expect(rollDice()).not.toBeLessThan(0);
  });

  it("it returns a number less than 6", function() {
    expect(rollDice()).toBeLessThan(7);
  });

});
