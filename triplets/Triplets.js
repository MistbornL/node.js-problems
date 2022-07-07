const arr = [-1, 0, 1, 2, -1, -4];

function triplet(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let b = i + 1; b < arr.length; b++) {
      if (arr[i] + arr[b] + arr[b + 1] === 0) {
        console.log([arr[i], arr[b], arr[b + 1]]);
      }
    }
  }
}

triplet([-1, 0, 1, 2, -1, -4]);
