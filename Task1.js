var filtr = function(arr, callback) {
    if(!Array.isArray(arr)){
        throw new Error ('The parameter is required and can only take an array')
}
else if (typeof callback !== 'function'){
    throw new Error ('The parameter is required and can only take a function')
}
else{
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
      }
}
  };
  const arr = [1,4,8,9,5]
filtr(arr, function(num, i, nums) {
    console.log('Number: ' + num + ', index: ' + i + ',', nums)
  }
  );