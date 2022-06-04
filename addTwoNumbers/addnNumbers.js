var addTwoNumbers = function (l1, l2) {
  const reversed1 = l1.reverse();
  const reversed2 = l2.reverse();
  let final1 = "";
  let final2 = "";
  for (const each of reversed1) {
    final1 += each;
  }
  for (const each of reversed2) {
    final2 += each;
  }
  const answer = parseInt(final1) + parseInt(final2);
  console.log([...answer.toString()].reverse().join(""));
  // console.log(mergedList.reduce((prev, cur) => prev + cur, 0));
};

const l1 = [2, 4, 3];
const l2 = [5, 6, 4];

addTwoNumbers(l1, l2);
