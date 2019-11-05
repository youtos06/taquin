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
      return index; // retourn l'index => which is true in the same time { case 0 is an exception}
    }
  }
  return false; // return false
}
