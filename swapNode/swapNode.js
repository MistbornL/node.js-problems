function swapPairs(head) {
  const dummy = new Array(...head);
  for (let i = 0; i < head.length; i += 2) {
    if (head.length === 1) {
      return head;
    }
    head[i] = head[i + 1];
    head[i + 1] = dummy[i];
    if (head[i] === undefined) {
      head.splice(i, 1);
    }
  }
  return head;
}

var numbers = [];
for (let i = 1; i < 100; i++) {
  numbers.push(i);
}
console.log(swapPairs(numbers));
