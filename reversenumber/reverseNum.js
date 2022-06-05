const reverse = (number) => {
  reversed = [...number.toString()].reverse().join("");
  if (reversed.includes("-")) {
    reversed = -parseInt(reversed);
    return reversed;
  } else {
    reversed = parseInt(reversed);
    return reversed;
  }
};
const n1 = 132;
const n2 = -543;

console.log(reverse(n1));
console.log(reverse(n2));
