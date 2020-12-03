const arrayReverse = (array) => {
    let reversed = [];
    for (let i = array.length-1; i>=0; i--){
        reversed.push(array[i])
    }
console.log(reversed);    
};
arrayReverse([1,2,3,4,5,6]);
