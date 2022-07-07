function firstPositive(nums) {
  nums = nums.sort(function (a, b) {
    return a - b;
  });
  var n = 1;
  for (let i = 0; n < nums.length; n++) {
    if (nums[i] === n) {
      n++;
    }
  }
  return n;
}

console.log(firstPositive([1, 2, 0]));
