require("./exos");

const tableau = [1, 2, 5, 8, 9];

// forEach
const toExec = function (el, index, tableau) {
  console.log(index, "=>", el, " ::", tableau);
};

// tableau.forEach(toExec)

// map
const tableauModifie = tableau.map((el) => {
  return el ** 2;
});
// console.log(tableauModifie)

// sort
// console.log(
//   tableau.sort((a, b) => {
//     // a > b => 1
//     // b > a => -1
//     // a = b => 0
//     if (a > b) return 1;
//     if (a < b) return -1;
//     return 0;
//   })
// );

// filter
// console.log(tableau.filter((el) => {
//   if (el > 5) return true
//   return false
// }))

// reduce
// console.log(
//   tableau.reduce((a, b) => {
//     return a + b;
//   }, 0)
// );
