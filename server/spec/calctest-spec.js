var calculator = require("../calc.js");
describe("Calculation", function () {
  it("Add 1 to 5", function () {
    var c = new calculator(); 
    var s = c.add(1,2,3,4,5);
    expect(s).toBe(15);
  });
  it("Multiply 2,3,4", function() {
      var c = new calculator();
      var m = c.multiply(2,3,4);
      expect(m).toBe(24);
  });
  it("Subtract 2,3 and 2,3,4", function() {
      var c = new calculator();
      var m = c.subtract(4,3,2);
      expect(m).toBe(-1); //4 -3 -2
  });
  it("Divide 24 by 3 4", function() {
      var c = new calculator();
      var m = c.divide(24,3,4);
      expect(m).toBe(2); //4 -3 -2
  });


});
