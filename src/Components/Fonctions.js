export function validateChange(data) {
  //valid change now to set new state
  if (data.length > 1) {
    // case of changing value of an input
    return parseInt(data.substr(1, 2), 10);
  } else {
    // initiale valid value
    return parseInt(data.substr(0, 1), 10);
  }
}
export function verifyChange(data) {
  // valid new char in input
  if (data.length > 1) {
    // case of changing value of an input
    if (
      isNaN(data.substr(1, data.length)) ||
      data.substr(1, data.length) === "9"
    ) {
      // in case new char ain't a number
      return false;
    }
  } else {
    // case the value is still null
    if (isNaN(data.substr(0, 1)) || data.substr(0, 1) === "9") {
      return false;
    }
  }
  return true;
}
