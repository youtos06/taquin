export function heuristique(Init) {
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
  if (Init[2][2] === null) {
    i--;
  }
  return i;
}
