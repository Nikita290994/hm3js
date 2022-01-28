var filtr = function(arr, callback) {
    if(!Array.isArray(arr)){
        throw new Error ('The parameter is required and can only take an array')
}
else if (typeof callback !== 'function'){
    throw new Error ('The parameter is required and can only take a function')
}
else{
    var arr1 = [];
    for (var i = 0; i < arr.length; i++) {
      if (callback.call(arr[i], i, arr)) {
        arr1.push(arr[i]);
      }
    }
    return arr1;
      }
}
const arr = [1,2,3,4,5,6,7]
var result = filtr(arr, function(num, i,arr) {
    //console.log('Number: ' + num + ', index: ' + i)
    return num>=2
  }
);
console.log(result);
