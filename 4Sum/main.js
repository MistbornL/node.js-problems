function sum4(number, target) {
  for (let a = 0; a < number.length; a++) {
    for (let b = a + 1; b < number.length; b++) {
      if (number[a] + number[b] + number[b + 1] + number[b + 2] === target) {
        console.log([number[a], number[b], number[b + 1], number[b + 2]]);
      }
    }
  }
}

sum4([2, 2, 2, 2, 2], 8);
