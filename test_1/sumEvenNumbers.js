function sumEvenNumbers(input) {
  let sum = 0;

  function findEvenNumber(input) {
    for (const item in input) {
      if (typeof input[item] === "object") {
        findEvenNumber(input[item]);
      } else if (typeof input[item] === "number" && input[item] % 2 === 0) {
        sum += input[item];
      }
    }
  }

  findEvenNumber(input);
  return sum;
}

module.exports = sumEvenNumbers;
