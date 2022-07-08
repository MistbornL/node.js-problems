function swapPairs(head) {
  if (head.length > 1 && head.length <= 100) {
    const dummy = new Array(...head);
    for (let i = 0; i < head.length; i += 2) {
      head[i] = head[i + 1];
      head[i + 1] = dummy[i];
    }
    return head;
  }
}

var numbers = [];
for (let i = 1; i <= 100; i++) {
  numbers.push(i);
}
console.log(swapPairs(numbers));
