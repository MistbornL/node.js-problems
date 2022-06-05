const x = 132;

reversed = [...x.toString()].reverse().join("");
if (reversed.includes("-")) {
  reversed = -parseInt(reversed);
} else {
  reversed = parseInt(reversed);
}
console.log(reversed);
