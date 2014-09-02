var dataStore = require("../data.js");
describe("Store", function () {
  var ds = new dataStore(function() {
      return {
	  name : null,
	  company : null,
	  date : null,
	  scenario : null,
	  tag : {}
      };
  });
  beforeEach(function() {
      ds.remove(); 
      for(var i = 0; i < 100; i++) {
	  var node = ds.create(); 
	  node.name = "accnt"+i;
	  node.company = "somecompany";
	  node.scenario = "real";
	  node.tag.division = "somereal"+i; 
	  ds.add(node);
      }
  });
  it("Create Data Store", function () {
      expect(ds.store.length).toBe(100);
   });
  it("Find", function () {
      expect(ds.find({name : 'accnt23'}).length).toBe(1);
      expect(ds.find({tag : {division : 'somereal23'}}).length).toBe(1);
      expect(ds.find({company : "somecompany"}).length).toBe(100);
      expect(ds.find({company : "someFakeCompany"}).length).toBe(0);
   });
    
});
