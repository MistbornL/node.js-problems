function max(string) {
  const count = {};
  [...string].forEach((letter) => {
    count[letter] ? count[letter]++ : (count[letter] = 1);
  });
  console.log(count);
  return Object.keys(count).reduce((a, b) => (count[a] > count[b] ? a : b));
}

console.log(max("asdsas"));
