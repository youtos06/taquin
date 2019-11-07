export function equalArray(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].length !== arr2[i].length) {
      return false;
    }
    for (let j = 0; j < arr1[i].length; j++) {
      if (arr1[i][j] !== arr2[i][j]) {
        return false;
      }
    }
  }
  return true; // array values are equal
}

export function inArrayList(list, arr) {
  for (let index = 0; index < list.length; index++) {
    if (equalArray(list[index], arr)) {
      return index + 1; // retourn l'index => which is true in the same time { case 0 is an exception} we add 1 to avoid exception
    }
  }
  return false; // return false
}

export function findMinIndex(arr) {
  // return array of index's of min values maybe two times the array include 5
  let values = [];
  for (let index = 0; index < arr.length; index++) {
    let min = 0; // avoid probs in case arr is empty we return empty array
    if (values.length > 0) {
      // first case
      min = values[0];
    }
    if (arr[min] > arr[index]) {
      // case its minimum
      values = [];
      values.push(index);
    } else if ((arr[min] = arr[index])) {
      //case two minimums
      values.push(index);
    }
  }
  return values;
}

export function findWhereToPut(value, arr) {
  //return index where to add value into arr
  for (let index = 0; index < arr.length; index++) {
    if (value < arr[index]) {
      return index;
    }
  }
  return 0;
}

export function emptyTable(array) {
  for (let index = 0; index < array.length; index++) {
    for (let j = 0; j < array[index].length; j++) {
      if (array[index][j] !== "" && array[index][j] !== " ") {
        return false;
      }
    }
  }
  return true;
}

export function deleteNullArrays(arrayOfArrays) {
  let index = 0;
  while (index < arrayOfArrays.length) {
    if (emptyTable(arrayOfArrays[index])) {
      arrayOfArrays.splice(index, 1);
    } else {
      index++;
    }
  }
  return arrayOfArrays;
}

export function lowerByOne(arr) {
  for (let index = 0; index < arr.length; index++) {
    arr[index]--;
  }
  return arr;
}
