/**Alex works at a clothing store. There is a large pile of socks that must be paired by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are. */

function sockMerchant(n, ar) {
  ar.sort((a, b) => a - b);
  let counter = 0;
  for (let i = 0; i < ar.length; ) {
    console.log('increment = ', i);
    console.log(ar);
    if (ar[i] === ar[i + 1]) {
      counter++;
      i += 2;
    } else {
      i++;
    }
  }
  console.log(counter);
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
