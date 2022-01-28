function f(arr){
    if(!Array.isArray(arr)){
        throw new Error ('The parameter is required and can only take an array')
}
  let sum = 0;
  arr = arr.flat(Infinity)
  for (let i = 0; i < arr.length; i++) {
      if(typeof arr[i] !== 'number'&& !Array.isArray(arr)){
        throw new Error ('The parameter is not number')
      }
       sum += arr[i];
  }
  console.log(sum);
}
//let arr = '4';
//let arr = ['4','5']
let arr = [1, 1, 1, [1, 1, [1, [1, [ [], [1] ]], 1], 1], 1];
f(arr);