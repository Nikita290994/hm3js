var reduce = function(arr, callback, startValue) {
    if(!Array.isArray(arr)){
        throw new Error ('The parameter is required and can only take an array')
    }
    else if (typeof callback !== 'function'){
    throw new Error ('The parameter is required and can only take a function')
    }
    else if (typeof startValue === 'string' || typeof startValue === 'number'){    
    var i, result = startValue;
    for (i = arr.length-1; i>=0 ; i--) {
      result = callback.call(null, result, arr[i], i, arr);
    }
    return result;
}
  };
  //var arrs = [1,2,3,4];
  var arrs = ['a','b','c'];
  arrs.reduceRight
  var arrResults = reduce(arrs, function(result, current) {
    return result+current; // - сумма элементов массива
  }, '');
  console.log(arrResults);