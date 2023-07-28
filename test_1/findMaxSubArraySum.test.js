const findMaxSubArraySum = require("./findMaxSubArraySum");

describe("findMaxSubArraySum", () => {
  test("Menghitung jumlah maksimum subarray", () => {
    const result = findMaxSubArraySum([100, 200, 300, 400], 2);
    expect(result).toEqual(700);
  });

  test("Menghitung jumlah maksimum subarray ke-2", () => {
    const result = findMaxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);
    expect(result).toEqual(39);
  });

  test("Menghitung jumlah maksimum subarray ke-3", () => {
    const result = findMaxSubArraySum([-3, 4, 0, -2, 6, -1], 2);
    expect(result).toEqual(5);
  });
});
