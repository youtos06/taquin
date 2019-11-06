export function heuristique(Init) {
  console.log(Init);
  var i = 9;
  if (Init[0][0] === 1) {
    i--;
  }
  if (Init[0][1] === 2) {
    i--;
  }
  if (Init[0][2] === 3) {
    i--;
  }
  if (Init[1][0] === 4) {
    i--;
  }
  if (Init[1][1] === 5) {
    i--;
  }
  if (Init[1][2] === 6) {
    i--;
  }
  if (Init[2][0] === 7) {
    i--;
  }
  if (Init[2][1] === 8) {
    i--;
  }
  if (Init[2][2] === "") {
    i--;
  }
  return i;
}

function findEmpty(init) {
  // find the empty position in the table
  for (let i = 0; i < init.length; i++) {
    for (let j = 0; j < init[i].length; j++) {
      if (init[i][j] === "" || init[i][j] === " ") return [i, j];
    }
  }
}

export function returnTables(init) {
  const tableEmpty = [["", "", ""], ["", "", ""], ["", "", ""]];

  const pos = findEmpty(init);

  const ligne = pos[0]; // position de la ligne de empty
  const col = pos[1]; // position de la colonne de empty
  let TableRes = [];
  //console.log(pos, init);

  // table to change by the case above
  if (ligne < init.length - 1) {
    let tempInit = JSON.parse(JSON.stringify(init)); //tempInit =[...init] won't work because the array includes array so we use deep copy
    tempInit[ligne][col] = tempInit[ligne + 1][col];
    tempInit[ligne + 1][col] = "";
    TableRes.push(tempInit);
  } else {
    // in this case there is no possible change with upper case example empty in position 0,0
    TableRes.push(tableEmpty);
  }

  // table to change by the case on the left
  if (0 < col) {
    let tempInit = JSON.parse(JSON.stringify(init));
    tempInit[ligne][col] = tempInit[ligne][col - 1];
    tempInit[ligne][col - 1] = "";
    TableRes.push(tempInit);
  } else {
    // in this case there is no possible change with upper case example empty in position 0,0
    TableRes.push(tableEmpty);
  }

  // table to change by  the case beneath
  if (0 < ligne) {
    let tempInit = JSON.parse(JSON.stringify(init));
    tempInit[ligne][col] = tempInit[ligne - 1][col];
    tempInit[ligne - 1][col] = "";
    TableRes.push(tempInit);
  } else {
    // in this case there is no possible change with upper case example empty in position 0,0
    TableRes.push(tableEmpty);
  }

  // table to change by the case on thr right
  if (col < init.length - 1) {
    let tempInit = JSON.parse(JSON.stringify(init));
    tempInit[ligne][col] = tempInit[ligne][col + 1];
    tempInit[ligne][col + 1] = "";
    TableRes.push(tempInit);
  } else {
    // in this case there is no possible change with upper case example empty in position 0,0
    TableRes.push(tableEmpty);
  }

  return TableRes;
}

export function heuristicOfTables(tables) {
  let hot = []; // heuristic of tables
  for (let index = 0; index < tables.length; index++) {
    hot.push(heuristique(tables[index]));
  }
  return hot;
}

// history
// not visited
//solution (arrayState,HistoryArrays,HistoryHeusteric,visited,before)
