var filtr = function(arr, callback, thisArg) {
    if(!Array.isArray(arr)){
        throw new Error ('The parameter is required and can only take an array')
}
else if (typeof callback !== 'function'){
    throw new Error ('The parameter is required and can only take a function')
}
else{
  for (var i = 0; i < arr.length; i++) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      return true
    }
  }
  return false;
}
};
const arr = [12, 5, 8, 130, 44]
var result = filtr(arr, function(num, i,arr) {
  //console.log('Number: ' + num + ', index: ' + i)
  return num>8
  });
  console.log(result);