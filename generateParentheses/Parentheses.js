function parentheses(n) {
  const opener = "(";
  const closer = ")";
  console.log((opener + closer).repeat(n));
  console.log(opener + closer);
}

parentheses(3);
