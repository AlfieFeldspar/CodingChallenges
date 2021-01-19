const factorial = (n) => {
  let array = [];
  for (let i = 1; i < n + 1; i++) {
    array.push(i);
    // console.log(mult);
    // let result=mult*mult;
  }
  console.log(array);
  console.log(array.reduce((a, b) => a * b));
};
factorial(4);

// method 2
const factorial = (n) => {
    for (let i = n - 1; i > 0; i--){
        n *= i;
    }
    return n;
}


//method 3
function factorial(n) {
    return (n > 1) ? n * factorial(n - 1) : 1;
}