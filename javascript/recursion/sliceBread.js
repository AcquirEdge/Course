const SLICE_LENGTH = 2;
function sliceBread(breadLength){
    // Base Case: when breadLength < slice_length
    if(breadLength < SLICE_LENGTH){
        return 0;
    } 
    // Recursive Case: 
    else {
        return 1 + sliceBread(breadLength - SLICE_LENGTH);
    } 
}

console.log(sliceBread(3));
// 1 + (0)

console.log(sliceBread(6));
// 1 + (1 + (1 + 0))