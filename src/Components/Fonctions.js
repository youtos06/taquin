export function validateChange(data) {
  //valid change now to set new state
  if (data.length > 1) {
    // case of changing value of an input
    return parseInt(data.substr(1, 2), 10);
  } else if (data.length === 1) {
    // initiale valid value
    return parseInt(data.substr(0, 1), 10);
  } else {
    return null;
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

export function validate(startObject) {
  let validationTable = [null, 1, 2, 3, 4, 5, 6, 7, 8];
  for (let value in startObject) {
    if (validationTable.includes(startObject[value])) {
      // we verify that value is included in table

      const index = validationTable.findIndex(validationElement => {
        return validationElement === startObject[value]; // return index of value included
      });
      //console.log(index);
      validationTable.splice(index, 1);
      // delete that element to avoid repitition
    } else {
      return true;
    }
  }
  if (validationTable.length > 0) {
    return true; // the table still include some values so it ain't valid
  }
  //console.log(validationTable);
  return false; // validation is a must button will be clickable now
}

export function createTable(startObject) {
  return [
    [startObject["r00"], startObject["r01"], startObject["r02"]],
    [startObject["r10"], startObject["r11"], startObject["r12"]],
    [startObject["r20"], startObject["r21"], startObject["r22"]]
  ];
}
