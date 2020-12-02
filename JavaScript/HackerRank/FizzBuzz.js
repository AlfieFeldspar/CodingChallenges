//2 point answer

const fizzbuzz = (input) => {
  for (let i = 1; i < 101; i++) {

    console.log(
      i % 15 === 0
        ? "FizzBuzz"
        : i % 3 === 0
        ? "Fizz"
        : i % 5 === 0
        ? "Buzz"
        : i
    );

  

    // if (i%3 === 0) {
    //     return "Fizz";
    // }
    // if (i%5===0) {
    //     return "Buzz";
    // }
    // if (i%15===0) {
    //     return "FizzBuzz";
    // }
    // else {
    //     return input;
    // }
  }
};
fizzbuzz();
