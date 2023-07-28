const manualShortingArray = require("./manualShortingArray");

describe("manualShortingArray", () => {
  test("Mengurutkan array dari nilai terkecil ke terbesar", () => {
    const number = [1, 2, 4, 3, 5, 3, 2, 1];
    const sortedNumber = manualShortingArray(number);
    expect(sortedNumber).toEqual([5, 4, 3, 3, 2, 2, 1, 1]);
  });
});
