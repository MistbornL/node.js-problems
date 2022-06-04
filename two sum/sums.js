const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let b = i + 1; b < nums.length; ++b) {
      if (nums[i] + nums[b] === target) {
        console.log(i, b);
      }
    }
  }
};

const number = [2, 7, 11, 15];
const target = 18;

twoSum(number, target);
