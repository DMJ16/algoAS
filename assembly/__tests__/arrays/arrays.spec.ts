import { kadanesAlgo } from "../../arrays";

describe("array algorithms", () => {
  test("Kadane's algorithm", () => {
    expect(
      kadanesAlgo([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4])
    ).toBe(19);

    expect(kadanesAlgo([-10, -2, -9, -4, -8, -6, -7, -1, -3, -5])).toBe(-1);
  });
});
