import { levenshteinDistance } from "../../dp";

test("levenshtein distance", () => {
  expect(levenshteinDistance("abc", "yabd")).toBe(2);
  expect(levenshteinDistance("abc", "abc")).toBe(0);
  expect(levenshteinDistance("xabc", "abcx")).toBe(2);
  expect(levenshteinDistance("abc", "xyz")).toBe(3);
  expect(levenshteinDistance("horse", "ros")).toBe(3);
});
