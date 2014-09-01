Calc = function() {

};


Calc.prototype.add = function(){
    var sum = 0;
    for(var i = 0; i < arguments.length; i++) {
	sum = sum + arguments[i];
    }
    return sum; 
}

Calc.prototype.multiply = function() {
    var prod = 1;
    for(var i = 0; i < arguments.length; i++) {
	prod = prod * arguments[i];
    }
    return prod;
}


Calc.prototype.subtract = function() {
    var sub = arguments[0];
    for(var i = 1; i < arguments.length; i++) {
	sub = sub - arguments[i];
    }
    return sub; 
}


Calc.prototype.divide = function() {
    var div = arguments[0];
    for(var i = 1; i < arguments.length; i++) {
	div = div / arguments[i];
    }
    return div;
}

module.exports = Calc;
