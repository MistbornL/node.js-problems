function wildcard(s, p) {
  var sArray = s.split("");
  var pArray = p.split("");
  console.log(sArray);

  if (pArray.includes("*")) {
    return true;
  }

  var merged = sArray.concat(pArray);
  console.log(merged);
}

console.log(wildcard("as", "df"));
