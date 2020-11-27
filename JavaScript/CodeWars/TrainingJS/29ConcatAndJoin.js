// function bigToSmall(arr) {
//   let flatArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     flatArr = flatArr.concat(arr[i]);
//   }
//   return flatArr.sort((a, b) => b - a).join(">");
// }

//REFACTORED
const bigToSmall = (arr) => {
    return [].concat(...arr).sort((a,b) => b-a).join(">");
}

let results = bigToSmall([  [1, 2],  [3, 4],  [5, 6],]);
console.log(results);
