const horn = (x = 1) => {
  let c = 0;
  let b = "";
  while ((x - 2) >= c) {
    b = b + "Toot, ";
    c++;
  };
  if(x > 0) {
    b = b + "Toot.";
  };
  return b;
};
console.log(horn(100000));

//of met custom message
const horn = (x = 1, string = "Toot") => {
  let c = 0;
  let b = "";
  while ((x - 2) >= c) {
    b = b + `${string}, `;
    c++;
  };
  if(x > 0) {
    b = b + `${string}.`;
  };
  return b;
};
console.log(horn(550000, "a"));
