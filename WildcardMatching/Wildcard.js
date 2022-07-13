function wildcard(s, p) {
  var sArray = s.split("");
  var pArray = p.split("");
  console.log(sArray);

  if (pArray.includes("*")) {
    return true;
  }

  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] === pArray[i]) {
      return true;
    }
  }
}

console.log(wildcard("as", "as"));
