var array=["a","b","c","d","e"]

var temp =array[0]
array[0]=array[4]
array[4]=temp
// DEFINING FUNCTION
function reverse(arr){
    for (var i=0; i < arr.length/2;i++) {
        var temp =arr[i]
        arr[1]= arr[arr.length -1 -i]
        arr[arr.length -1 -i] =temp
    }
    // ITERATE THROUGH THE ARRAY UNTIL THE HALFWAY POINT
        // USING VARIABLE i and arr.length - 1 - i, SWAP VALUES 
    return arr
}

// CALLING THE FUNCTION
console.log(reverse(["a", "b", "c", "d", "e"]))