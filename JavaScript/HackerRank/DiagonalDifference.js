/**Given a square matrix, calculate the absolute difference between the sums of its diagonals. Input is a square matrix.
11 2 4
4 5 6
10 8 -12

|(11+5+-12)-(10+5+4)| = |4-19| = |-15| = 15
 */

let sum = 0;
for (let i = 0; i < n; i++) {
    sum += a[i][i] - a[i][n-1-i];
}
console.log(sum >= 0 ? sum : sum * -1);


var sum = 0;
for(var i = 0; i<n; i++){
    sum += a[i][i];
    sum -= a[i][n-i-1];
}  
console.log(Math.abs(sum));