const { TestScheduler } = require("jest");
const {
  shoutForLoop,
  shoutWhileLoop,
  shoutForOfLoop,
  sumArray,
  oddArray,
  evenArray,
  findSmallest,
  findSecondSmallest,
  findSecondLargest,
  removeDups,
} = require("../problems/arraysWithLoops");

describe("shoutForLoop", () => {
  test("adds an ! to the end of each element", () => {
    expect(shoutForLoop([])).toEqual([]);
    expect(shoutForLoop(["I", "am", "a", "happy", "array"])).toEqual([
      "I!",
      "am!",
      "a!",
      "happy!",
      "array!",
    ]);
  });

  test("uses a for loop", () => {
    const funcString = shoutForLoop.toString();
    expect(funcString.includes("for")).toBe(true);
    expect(funcString.includes("while")).toBe(false);
  });
});

describe("shoutWhileLoop", () => {
  test("adds an ! to the end of each element", () => {
    expect(shoutWhileLoop([])).toEqual([]);
    expect(shoutWhileLoop(["I", "am", "a", "happy", "array"])).toEqual([
      "I!",
      "am!",
      "a!",
      "happy!",
      "array!",
    ]);
  });

  test("uses a while loop", () => {
    const funcString = shoutWhileLoop.toString();
    expect(funcString.includes("for")).toBe(false);
    expect(funcString.includes("while")).toBe(true);
  });
});

describe("shoutForOfLoop", () => {
  test("adds an ! to the end of each element", () => {
    expect(shoutForOfLoop([])).toEqual([]);
    expect(shoutForOfLoop(["I", "am", "a", "happy", "array"])).toEqual([
      "I!",
      "am!",
      "a!",
      "happy!",
      "array!",
    ]);
  });

  test("uses a for/of loop", () => {
    const funcString = shoutForOfLoop.toString();
    expect(funcString.includes("for")).toBe(true);
    expect(funcString.includes("of")).toBe(true);
    expect(funcString.includes("while")).toBe(false);
  });
});

describe("sumArray", () => {
  test("returns the sum of all values", () => {
    expect(sumArray([])).toBe(0);
    expect(sumArray([1, 2, 3])).toBe(6);
    expect(sumArray([5, 5, 5, 5])).toBe(20);
  });
});

describe("oddArray", () => {
  test("returns a new array of only the odd valued elements", () => {
    expect(oddArray([1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
    expect(oddArray([0, 2, 4, 6])).toEqual([]);
    expect(oddArray([7, 9])).toEqual([7, 9]);
  });
});

describe("evenArray", () => {
  test("returns a new array of only the odd valued elements", () => {
    expect(evenArray([1, 2, 3, 4, 5])).toEqual([2, 4]);
    expect(evenArray([0, 2, 4, 6])).toEqual([0, 2, 4, 6]);
    expect(evenArray([7, 9])).toEqual([]);
  });
});

describe("findSmallest", () => {
  test("returns the smallest element in an array", () => {
    expect(findSmallest([1, 2, 3, 4])).toBe(1);
    expect(findSmallest([5, 4, 3, 2])).toBe(2);
    expect(findSmallest([5, 4, 6, -6, 3, 9])).toBe(-6);
  });
});

describe("findSecondSmallest", () => {
  test("returns the smallest element in an array", () => {
    expect(findSecondSmallest([1, 2, 3, 4])).toBe(2);
    expect(findSecondSmallest([5, 4, 3, 2])).toBe(3);
    expect(findSecondSmallest([-1, -2, -3])).toBe(-2);
    expect(findSecondSmallest([10, 12, 8, 9])).toBe(9);
  });
});

describe("findSecondLargest", () => {
  test("returns the smallest element in an array", () => {
    expect(findSecondLargest([1, 2, 3, 4])).toBe(3);
    expect(findSecondLargest([5, 4, 3, 2])).toBe(4);
    expect(findSecondLargest([-1, -2, -3])).toBe(-2);
    expect(findSecondLargest([10, 12, 8, 11])).toBe(11);
  });
});

describe("removeDups", () => {
  test("returns an array without any of the duplicates", () => {
    expect(removeDups([4, 2, 6, 2, 2, 6, 4, 9, 2, 1])).toEqual([4, 2, 6, 9, 1]);
    expect(removeDups([3, 4, 5])).toEqual([3, 4, 5]);
    expect(removeDups([1, 1, 1])).toEqual([1]);
  });
});
