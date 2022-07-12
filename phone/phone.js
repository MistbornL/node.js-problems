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
  if (map[dial] === 1) {
    console.log("wrong number");
  }
  if (dial.length > 4 || dial.length < 1) {
    console.log("");
  }
  if (dial.length === 1) {
    console.log(map[dial]);
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
}

console.log(phone(23456));
