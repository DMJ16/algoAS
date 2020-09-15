import { levenshteinDist } from "../../dp";

test("levenshtein distance", () => {
  expect(levenshteinDist("abc", "yabd")).toBe(2);
  expect(levenshteinDist("abc", "abc")).toBe(0);
  expect(levenshteinDist("xabc", "abcx")).toBe(2);
  expect(levenshteinDist("abc", "xyz")).toBe(3);
  expect(levenshteinDist("horse", "ros")).toBe(3);
});
