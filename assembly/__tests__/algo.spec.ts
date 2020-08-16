import { binarySearch, kmpSearch } from "../algorithms";

describe("binarySearch", () => {
  it("returns the found input value", () => {
    expect(binarySearch([1, 2, 58, 99, 100], 100)).toBe(4);
    expect(binarySearch([1, 2, 5, 99, 10], 5)).toBe(2);
    expect(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 13)).toBe(4);
  });

  it("returns -1 if value is not found", () => {
    expect(binarySearch([1, 2, 58, 99, 10], 100)).toBe(-1);
    expect(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103)).toBe(-1);
  });
});

describe("KnuthMorrisPratt", () => {
  it("returns number of occurences of str2 in str1", () => {
    expect(kmpSearch("hannahhahhahahahhahahahannah", "hannah")).toBe(2);
    expect(kmpSearch("hannahhahhahahahhahahahannah", "ha")).toBe(9);
    expect(kmpSearch("hannahhahhahahah hahah     ahannah", "hannah")).toBe(2);
  });

  it("returns 0 if no matches exist", () => {
    expect(kmpSearch("hannahhahhahahahhahahahannah", "dsds")).toBe(0);
    expect(kmpSearch("car", "hannah")).toBe(0);
    expect(kmpSearch("car", "dsds")).toBe(0);
    expect(kmpSearch("", "ha")).toBe(0);
    expect(kmpSearch("h", "hannah")).toBe(0);
  });
});
