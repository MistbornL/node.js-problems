var i = 1;

const nums = [1, 2, 0];
nums = nums.sort(function (a, b) {
  return a - b;
});
let n = 1;
for (let i = 0; n < nums.length; n++) {
  if (nums[i] === n) {
    n++;
  }
}
console.log(n);
