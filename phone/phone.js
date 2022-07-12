const map = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

function phone(dial) {
  var digits = [];
  var answer = [];

  dial = dial.toString();
  if (dial === 1) {
    return "wrong number";
  } else if (dial.length > 4 || dial.length < 1) {
    return "wrong length";
  } else if (dial.length === 1) {
    answer.push(...map[dial]);
  } else {
    for (let i = 0; i < dial.length; i++) {
      digits.push(...map[dial[i]]);
    }
    for (let i = 0; i < digits.length; i++) {
      for (let b = 3; b < digits.length; b += 1) {
        if (digits[i] !== digits[b]) {
          answer.push([digits[i], digits[b]]);
        } else {
          return answer;
        }
      }
    }
  }
  return answer;
}

console.log(phone(2));
console.log(phone(23));
console.log(phone(234));
console.log(phone(23456));
console.log(phone(1));
