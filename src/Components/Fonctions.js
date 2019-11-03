export function validateChange(data) {
  //valid change now to set new state
  if (data.length > 1) {
    // case of changing value of an input
    return parseInt(data.substr(1, 2), 10);
  } else if (data.length === 1) {
    // initiale valid value
    return parseInt(data.substr(0, 1), 10);
  } else {
    return "";
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
  let validationTable = ["", 1, 2, 3, 4, 5, 6, 7, 8];
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

// export function ObjToArray(object) {
//   let array = [];
//   Object.keys(object).forEach(key => {
//     array = [...array, object[key]];
//   });

//   return array;
// }

// export function createTable(array, numberOfElements = 3) {
//   let splicedArray = [];
//   let index = 0;

//   while (index < array.length) {
//     if (index % numberOfElements === 0) splicedArray = [...splicedArray, []];
//     splicedArray[splicedArray.length - 1] = [
//       ...splicedArray[splicedArray.length - 1],
//       array[index]
//     ];
//     index++;
//     console.log(splicedArray);
//   }
//   return splicedArray;
// }

export function createTable(startObject) {
  const tableStruct = [];
  // js don't allow to push null or "" SO WE LL REPLACE IT WITH SPACE

  for (let i = 0; i < 3; i++) {
    let temp = [];
    for (let j = 0; j < 3; j++) {
      let element = startObject["r" + i + j];
      temp.push(element);
    }
    //console.log(temp);
    tableStruct.push(temp);
  }
  // firstLigne.push(startObject["r00"]);
  // firstLigne.push(startObject["r01"]);
  // firstLigne.push(startObject["r02"]);
  // tableStruct.push(firstLigne);

  // const secondLigne = [];
  // secondLigne.push(startObject["r10"]);
  // secondLigne.push(startObject["r11"]);
  // secondLigne.push(startObject["r12"]);
  // tableStruct.push(secondLigne);

  // const thirdLigne = [];
  // thirdLigne.push(startObject["r20"]);
  // thirdLigne.push(startObject["r21"]);
  // thirdLigne.push(startObject["r22"]);
  // tableStruct.push(thirdLigne);

  //console.log(tableStruct);

  return tableStruct;
}
