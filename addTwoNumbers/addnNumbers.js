var addTwoNumbers = function (l1, l2) {
  const mergedList = [...l1.reverse(), ...l2.reverse()].toString();
  console.log(mergedList);
  console.log(mergedList.reduce((prev, cur) => prev + cur, 0));
};

const l1 = [2, 4, 3];
const l2 = [5, 6, 4];

addTwoNumbers(l1, l2);
