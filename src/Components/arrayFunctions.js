import { heuristique, returnTables, heuristicOfTables } from "./heuristic";

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

function sortBestChilds(values, arrayPos) {
  //console.log(arrayPos, values);
  //values : indexes of min possibilities ,arr of possibilities
  // return indexes based on the better choice
  let sort = [];
  let min = 0;
  for (let index = 0; index < values.length; index++) {
    let array = arrayPos[values[index]]; // array with index declared in the value table
    //console.log(array);
    let arrayChilds = returnTables(array);
    let hot = heuristicOfTables(arrayChilds);
    let temp = Math.min(hot);
    if (index === 0) {
      min = temp;
      sort.push(values[index]);
    } else {
      if (temp < min) {
        // the child with the possibilities of min heuristic values is the better choice
        min = temp;
        sort.unshift(values[index]);
      } else {
        sort.push(values[index]);
      }
    }
  }
  return sort; // indexes sorted by the best choice
}

export function findMinIndex(arr, arrayPos) {
  // return array of index's of min values maybe two times the array include 5
  let values = [];
  let min = 0;
  for (let index = 0; index < arr.length; index++) {
    // avoid probs in case arr is empty we return empty array
    if (values.length > 0) {
      // first case OF VALUE AFTER ADDING ONE
      min = values[0];
    }
    if (arr[min] > arr[index]) {
      // case its minimum
      values = [];
      values.push(index);
    } else if (arr[min] === arr[index]) {
      //case two minimums // valid for index===0 also
      values.push(index);
    }
  }
  if (values.length < 2) {
    // this mean values array has one value
    return values;
  } else {
    //!!!!! if values array has more than 2 values we should decide the better decision for the shortest solution
    return sortBestChilds(values, arrayPos);
  }
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

// to reach a better speed in search for visited states i chooseed a structure like the next for the object
// insetead of pusing into array visited
// we Make visited into the next obj
// visited = {
//   '1': [...]
//   '2': [...]
// } where 1 and 2 is the heuristic of the arrays (like level search)

export function findInObject(object, array) {
  //console.log(object);
  let arrayHeuristic = heuristique(array); // level of the array
  //less calculation for visited arrays
  if (inArrayList(object[arrayHeuristic], array)) {
    // visited[key] => es6 feature
    return true; // array is visited and belongs to it heurstic level
  }
  return false;
}

export function returnFirstFromObject(object) {
  console.log(object);
  for (const key in object) {
    if (object[key].length > 0) {
      console.log(object[key]);
      return object[key].splice(0, 1); // return first element(last one that had been add to the smallest level) with smaller heuristic
    }
  }
  return false;
}
