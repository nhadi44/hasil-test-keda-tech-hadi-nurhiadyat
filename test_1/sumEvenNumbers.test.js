const sumEvenNumbers = require("./sumEvenNumbers");

describe("sumEvenNumbers", () => {
  test("Menghitung jumlah bilangan genap pada object", () => {
    const input = {
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: "ball", ccc: 5 },
      d: 1,
      e: { e: { e: 4 }, ee: "car" },
    };

    const result = sumEvenNumbers(input);
    expect(result).toEqual(12);
  });
});
