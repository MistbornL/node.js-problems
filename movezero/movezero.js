function move(arr) {
  arr.find((element) => {
    if (element === 0) {
      arr.splice(arr.indexOf(element), 1);
      arr.push(0);
    }
  });
  return arr;
}

console.log(move([1, 2, 0, 3, 0, 5]));

function move(arr) {
  arr.forEach((element) => {
    if (element === 0) {
      arr.splice(arr.indexOf(element), 1);
      arr.push(0);
    }
  });
  return arr;
}
