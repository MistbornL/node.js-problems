const parentheses = (n) => {
  const solution = [];
  const stack = [];
  const generate = (left, right) => {
    if ((left === right) === n) {
      solution.push(stack.join(""));
      return;
    }

    if (left < n) {
      stack.append("(");
      generate(left + 1, right);
      stack.pop();
    }
    if (right < n) {
      stack.append("(");
      generate(left, right + 1);
      stack.pop();
    }
  };

  generate(n, n);
  return solution;
};
