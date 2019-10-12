// Beat you to it, Gearbo

let size = Number(prompt("Size?"));
console.log(size, "size");
let board = "";
let count2 = 0;
let count3 = 0;

for (let count1 = 0; count1 < size; count1++) {
  while (count2 < size) {
    if ((count2 + count1) % 2 === 1) {
       board = board + "#";
       count2++;
       console.log("count2%2\nSize", size, "count1", count1, "count2", count2, "board", board);
     } else if ((count2 + count1) % 2 === 0) {
       board = board + " ";
       count2++;
       console.log("count2%1\nSize", size, "count1", count1, "count2", count2, "board", board);
     } else {
       console.log("error", size, "count1", count1, "count2", count2, "board", board);
       break;
     }       
   }
   count2 = count2 - size;
   board = board + "\n";
   console.log("count1for\nSize", size, "count1", count1, "count2", count2, "board", board);
}
console.log("\n\n\n");
console.log(board);

//mooier als je te tussentijdse console.logs weghaalt, zoals hier als functie hashboard.


function hashboard(size) {
  let board = "";
  let count2 = 0;
  let count3 = 0;

  for (let count1 = 0; count1 < size; count1++) {
    while (count2 < size) {
      if ((count2 + count1) % 2 === 1) {
         board = board + "#";
         count2++;
       } else if ((count2 + count1) % 2 === 0) {
         board = board + " ";
         count2++;
       }       
     }
     count2 = count2 - size;
     board = board + "\n";
  }
  console.log(board);
  return board;
};
