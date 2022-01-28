function reverse(arr){
    if(!Array.isArray(arr)){
        throw new Error ('The parameter is required and can only take an array')
    }
    else if(arr.length == 0){
        throw new Error ('The specified empty array')
    }
    else{
for (i = arr.length-1; i>=0 ; i--) {
    console.log(arr[i]);
}
    }
}
var arr = [10,8,9];
reverse(arr);