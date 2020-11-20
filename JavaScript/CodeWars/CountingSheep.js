function countSheeps(arrayOfSheep) {
    let count = 0;
    arrayOfSheep.forEach(sheep => {
      if (sheep) {count++}
    })
      return count;
  }

  /*Optimized solution:
  function countSheeps(arrayOfSheep) {
      return arrayOfSheep.filter(Boolean).length;
  }
  */