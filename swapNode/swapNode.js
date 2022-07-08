function swapPairs(node) {
  const dummy = new Array(...node);
  for (let i = 0; i < node.length; i += 2) {
    if (node.length === 1) {
      return node;
    }
    node[i] = node[i + 1];
    node[i + 1] = dummy[i];
    if (node[i] === undefined) {
      node.splice(i, 1);
    }
  }
  return node;
}

var numbers = [];
for (let i = 1; i < 100; i++) {
  numbers.push(i);
}
console.log(swapPairs(numbers));
