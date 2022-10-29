// arr From
const fromNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
const newFromNumber = Array.from(fromNumber, (x) =>
  x.indexOf("1") === 0 ? x : undefined
);
console.log(newFromNumber);
/**
 * output: [
  "1",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "10",
  "11",
];
 */
// arr of
const test = fromNumber.copyWithin(4, 1, 4);
console.log(test)
