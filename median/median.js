const median = (nums1, nums2) => {
  const merged = [...nums1, ...nums2].sort();
  console.log(`Merged List: ${merged}`);

  if (merged.length % 2 == 1) {
    const median = merged[Math.round(merged.length / 2) - 1];
    return median;
  } else {
    const median =
      (merged[merged.length / 2 - 1] + merged[merged.length / 2]) / 2;
    return median;
  }
};

const nums1 = [1, 3];
const nums2 = [2];

const nums3 = [1, 4, 6];
const nums4 = [5];

console.log(median(nums1, nums2));
console.log(median(nums3, nums4));
