
  if (pArray.includes("*") && pArray.length === 1) {
    return true;
  } else if (pArray.length !== sArray.length) {
    return false;
  }