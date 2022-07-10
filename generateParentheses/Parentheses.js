const parentheses = (n) => {
  const solution = [];
  const generate = (left, right, partial) => {
    if (left > right) return;
    if (!left && !right) solution.push(partial);

    if (left > 0) generate(left - 1, right, partial + "(");
    if (left > 0) generate(left, right - 1, partial + ")");
  };

  generate(n, n, "");
  return solution;
};
console.log(parentheses(3));
