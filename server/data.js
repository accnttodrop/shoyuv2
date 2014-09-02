Data = function(dataFn) {
    this.store = [];
    this.create = dataFn;
}

Data.prototype.add = function(data) {
    this.store.push(data);
}

Data.prototype.remove = function(criteria) {
    if(criteria) {
	
    }else {
	this.store = []; 
    }
}


Data.prototype.match = function(query,data) {
    var isMatched = true; 
    for(var prop in query) {
	if(query.hasOwnProperty(prop)) {
	    if(typeof data[prop] === 'object') {
		isMatched = isMatched && this.match(query[prop],data[prop]);
	    }else {
		isMatched = isMatched && (query[prop] == data[prop]);
	    }
	}
    }
    return isMatched;
}


Data.prototype.find = function(query) {
    var matchedVals = []; 
    var that = this; 
    this.store.forEach(function(ele) {
	if(that.match(query,ele)) {
	    matchedVals.push(ele); 
	}
    });
    return matchedVals;
}

module.exports = Data;
