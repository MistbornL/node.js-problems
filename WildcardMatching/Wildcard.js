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
    } else if (pArray[i] === "?") {
      return true;
    } else {
      return false;
    }
  }
  // var merged = sArray.concat(pArray);
  // for (let i = 0; i < sArray.length; i++) {
  //   for (let b = sArray.length - 1; b < sArray.length; b++) {
  //     console.log(merged[i], merged[b]);
  //   }
  // }
}

console.log(wildcard("asd", "?cd"));
