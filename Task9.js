function arrayFill(value, length) {
    if(typeof value !== 'number' && typeof value !== 'string' && typeof value !== 'object' && !Array.isArray(value)){
        throw new Error ('The parameter is required and can only take an array')
    } 
    else if(typeof length !== 'number'){
        throw new Error ('The parameter must be a number')
    }
	var arr = [];
	for (var i = 0; i < length; i++) {
		arr.push(value);
	}
	return arr;
}

console.log(arrayFill('x', 5));