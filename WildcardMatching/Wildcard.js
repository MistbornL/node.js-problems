function wildcard(s, p) {
  var sArray = s.split("");
  var pArray = p.split("");

  if (pArray.includes("*") && pArray.length === 1) {
    return true;
  } else if (pArray.length !== sArray.length) {
    return false;
  }

  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] !== pArray[i] && pArray[i] !== "?" && pArray[i] !== "*") {
      return false;
    } else if (pArray[i] === "?") {
      continue;
    } else if (pArray[i] === "*") {
    } else if (pArray.length !== sArray.length) {
      return false;
    }
  }
  return true;
}

console.log(wildcard("adceb", "*d*eb"));
