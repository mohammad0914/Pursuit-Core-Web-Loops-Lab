const {
  oneTillDoneWhileLoop,
  oneTillDoneForLoop,
  doneToZeroWhileLoop,
  doneToZeroForLoop,
  evenAndOddWhileLoop,
  evenAndOddForLoop,
  tillXTimes9WhileLoop,
  tillXTimes9ForLoop,
  endsWithFiveWhileLoop,
  endsWithFiveForLoop,
  fizzBuzzPart1,
  fizzBuzzPart2,
  rangeSum,
  rangeOdd,
  rangeEveryOther,
  containsWhileLoop,
  containsForLoop,
  targetCount,
  firstIndexFound,
  lastIndexFound,
  timesIndex,
  cumulativeSum,
} = require("../problems/loops");

describe("oneTillDoneWhileLoop", () => {
  test("returns an array with numbers from 1 till given number", () => {
    expect(oneTillDoneWhileLoop(3)).toEqual([1, 2, 3]);
    expect(oneTillDoneWhileLoop(5)).toEqual([1, 2, 3, 4, 5]);
  });
  test("is written with a while loop", () => {
    let funcString = oneTillDoneWhileLoop.toString();
    expect(funcString.includes("while")).toBe(true);
    expect(funcString.includes("for")).toBe(false);
  });
});

describe("oneTillDoneForLoop", () => {
  test("returns an array with numbers from 1 till given number", () => {
    expect(oneTillDoneForLoop(3)).toEqual([1, 2, 3]);
    expect(oneTillDoneForLoop(5)).toEqual([1, 2, 3, 4, 5]);
  });
  test("is written with a for loop", () => {
    let funcString = oneTillDoneForLoop.toString();
    expect(funcString.includes("while")).toBe(false);
    expect(funcString.includes("for")).toBe(true);
  });
});

describe("doneToZeroWhileLoop", () => {
  test("returns an array with numbers from number to zero (exclusive)", () => {
    expect(doneToZeroWhileLoop(3)).toEqual([3, 2, 1]);
    expect(doneToZeroWhileLoop(5)).toEqual([5, 4, 3, 2, 1]);
  });
  test("is written with a while loop", () => {
    let funcString = doneToZeroWhileLoop.toString();
    expect(funcString.includes("while")).toBe(true);
    expect(funcString.includes("for")).toBe(false);
  });
});

describe("doneToZeroForLoop", () => {
  test("returns an array with numbers from number to zero (exclusive)", () => {
    expect(doneToZeroForLoop(3)).toEqual([3, 2, 1]);
    expect(doneToZeroForLoop(5)).toEqual([5, 4, 3, 2, 1]);
  });
  test("is written with a for loop", () => {
    let funcString = doneToZeroForLoop.toString();
    expect(funcString.includes("while")).toBe(false);
    expect(funcString.includes("for")).toBe(true);
  });
});

describe("evenAndOddWhileLoop", () => {
  test("returns an array with numbers from number to zero (exclusive)", () => {
    expect(evenAndOddWhileLoop(3)).toEqual([
      "0 is even",
      "1 is odd",
      "2 is even",
      "3 is odd",
    ]);
    expect(evenAndOddWhileLoop(5)).toEqual([
      "0 is even",
      "1 is odd",
      "2 is even",
      "3 is odd",
      "4 is even",
      "5 is odd",
    ]);
  });
  test("is written with a while loop", () => {
    let funcString = evenAndOddWhileLoop.toString();
    expect(funcString.includes("while")).toBe(true);
    expect(funcString.includes("for")).toBe(false);
  });
});
describe("evenAndOddForLoop", () => {
  test("returns an array with numbers from number to zero (exclusive)", () => {
    expect(evenAndOddForLoop(3)).toEqual([
      "0 is even",
      "1 is odd",
      "2 is even",
      "3 is odd",
    ]);
    expect(evenAndOddForLoop(5)).toEqual([
      "0 is even",
      "1 is odd",
      "2 is even",
      "3 is odd",
      "4 is even",
      "5 is odd",
    ]);
  });
  test("is written with a for loop", () => {
    let funcString = evenAndOddForLoop.toString();
    expect(funcString.includes("while")).toBe(false);
    expect(funcString.includes("for")).toBe(true);
  });
});

describe("tillXTimes9WhileLoop", () => {
  test("returns an array from 0 to x with each number multiplied by 9", () => {
    expect(tillXTimes9WhileLoop(5)).toEqual([0, 9, 18, 27, 36, 45]);
    expect(tillXTimes9WhileLoop(9)).toEqual([
      0,
      9,
      18,
      27,
      36,
      45,
      54,
      63,
      72,
      81,
    ]);
  });
  test("is written with a while loop", () => {
    let funcString = tillXTimes9WhileLoop.toString();
    expect(funcString.includes("while")).toBe(true);
    expect(funcString.includes("for")).toBe(false);
  });
});
describe("tillXTimes9ForLoop", () => {
  test("returns an array from 0 to x with each number multiplied by 9", () => {
    expect(tillXTimes9ForLoop(5)).toEqual([0, 9, 18, 27, 36, 45]);
    expect(tillXTimes9ForLoop(9)).toEqual([
      0,
      9,
      18,
      27,
      36,
      45,
      54,
      63,
      72,
      81,
    ]);
  });
  test("is written with a for loop", () => {
    let funcString = tillXTimes9ForLoop.toString();
    expect(funcString.includes("while")).toBe(false);
    expect(funcString.includes("for")).toBe(true);
  });
});

describe("endsWithFiveWhileLoop", () => {
  test("returns an array from 1 to 100 with only numbers that end in 5", () => {
    expect(endsWithFiveWhileLoop(5)).toEqual([
      5,
      15,
      25,
      35,
      45,
      55,
      65,
      75,
      85,
      95,
    ]);
  });
  test("is written with a while loop", () => {
    let funcString = endsWithFiveWhileLoop.toString();
    expect(funcString.includes("while")).toBe(true);
    expect(funcString.includes("for")).toBe(false);
  });
});
describe("endsWithFiveForLoop", () => {
  test("returns an array from 1 to 100 with only numbers that end in 5", () => {
    expect(endsWithFiveForLoop(5)).toEqual([
      5,
      15,
      25,
      35,
      45,
      55,
      65,
      75,
      85,
      95,
    ]);
  });
  test("is written with a for loop", () => {
    let funcString = endsWithFiveForLoop.toString();
    expect(funcString.includes("while")).toBe(false);
    expect(funcString.includes("for")).toBe(true);
  });
});
describe("fizzBuzzPart1", () => {
  test("returns an array of length 100", () => {
    expect(fizzBuzzPart1().length).toBe(100);
  });
  test("returns correct array", () => {
    const arr = Array(100)
      .fill(null)
      .map((_, i) => {
        if (!((i + 1) % 3)) return "Fizz";
        else if (!((i + 1) % 5)) return "Buzz";
        else return i + 1;
      });
    expect(fizzBuzzPart1()).toEqual(arr);
  });
});
describe("fizzBuzzPart2", () => {
  test("returns an array of length 100", () => {
    expect(fizzBuzzPart2().length).toBe(100);
  });
  test("returns correct array", () => {
    const arr = Array(100)
      .fill(null)
      .map((_, i) => {
        if (!((i + 1) % 3) && !((i + 1) % 5)) return "FizzBuzz";
        else if (!((i + 1) % 3)) return "Fizz";
        else if (!((i + 1) % 5)) return "Buzz";
        else return i + 1;
      });
    expect(fizzBuzzPart2()).toEqual(arr);
  });
});

describe("rangeSum", () => {
  test("returns sum of all numbers between min and max inclusive", () => {
    expect(rangeSum(2, 3)).toBe(5);
    expect(rangeSum(10, 12)).toBe(33);
    expect(rangeSum(1, 5)).toBe(15);
  });
});

describe("rangeOdd", () => {
  test("returns only odd numbers in decreasing order", () => {
    expect(rangeOdd(2, 3)).toEqual([3]);
    expect(rangeOdd(10, 26)).toEqual([25, 23, 21, 19, 17, 15, 13, 11]);
    expect(rangeOdd(1, 5)).toEqual([5, 3, 1]);
  });
});

describe("rangeEveryOther", () => {
  test("returns every other num in range in increasing order", () => {
    expect(rangeEveryOther(2, 3)).toEqual([2]);
    expect(rangeEveryOther(10, 26)).toEqual([
      10,
      12,
      14,
      16,
      18,
      20,
      22,
      24,
      26,
    ]);
    expect(rangeEveryOther(1, 6)).toEqual([1, 3, 5]);
  });
});

describe("containsWhileLoop", () => {
  test("returns true for found elements", () => {
    expect(containsWhileLoop([5, 2, 3, 5, 9], 3)).toBe(true);
    expect(containsWhileLoop(["cat", "dog", "bird"], "cat")).toBe(true);
  });
  test("returns false for not found elements", () => {
    expect(containsWhileLoop([5, 2, 3, 5, 9], 6)).toBe(false);
    expect(containsWhileLoop(["cat", "dog", "bird"], "whale")).toBe(false);
  });

  test("is written with a while loop", () => {
    const funcString = containsWhileLoop.toString();
    expect(funcString.includes("while")).toBe(true);
    expect(funcString.includes("for")).toBe(false);
  });

  test("does not use built in includes method", () => {
    const funcString = containsWhileLoop.toString();
    expect(funcString.includes("includes")).toBe(false);
  });
});

describe("containsForLoop", () => {
  test("returns true for found elements", () => {
    expect(containsForLoop([5, 2, 3, 5, 9], 3)).toBe(true);
    expect(containsForLoop(["cat", "dog", "bird"], "cat")).toBe(true);
  });
  test("returns false for not found elements", () => {
    expect(containsForLoop([5, 2, 3, 5, 9], 6)).toBe(false);
    expect(containsForLoop(["cat", "dog", "bird"], "whale")).toBe(false);
  });

  test("is written with a for loop", () => {
    const funcString = containsForLoop.toString();
    expect(funcString.includes("while")).toBe(false);
    expect(funcString.includes("for")).toBe(true);
  });

  test("does not use built in includes method", () => {
    const funcString = containsForLoop.toString();
    expect(funcString.includes("includes")).toBe(false);
  });
});

describe("targetCount", () => {
  test("returns the accurate count", () => {
    expect(targetCount([5, 2, 3, 5, 9], 5)).toBe(2);
    expect(targetCount([5, 2, 3, 5, 9], 6)).toBe(0);
    expect(targetCount(["cat", "cat", "cat", "bird"], "cat")).toBe(3);
    expect(targetCount(["cat", "cat", "cat", "bird"], "bird")).toBe(1);
    expect(targetCount(["cat", "cat", "cat", "bird"], "whale")).toBe(0);
  });
});

describe("firstIndexFound", () => {
  test("returns -1 when element not found", () => {
    expect(firstIndexFound([5, 2, 3, 5, 9], 6)).toBe(-1);
    expect(firstIndexFound([5, 2, 3, 5, 9], 0)).toBe(-1);
    expect(firstIndexFound([], 8)).toBe(-1);
  });
  test("returns index of the first element match", () => {
    expect(firstIndexFound([0, 2, 3, 5, 9], 9)).toBe(4);
    expect(firstIndexFound([5, 2, 3, 5, 9], 5)).toBe(0);
  });
});

describe("lastIndexFound", () => {
  test("returns -1 when element not found", () => {
    expect(lastIndexFound([5, 2, 3, 5, 9], 6)).toBe(-1);
    expect(lastIndexFound([5, 2, 3, 5, 9], 0)).toBe(-1);
    expect(lastIndexFound([], 8)).toBe(-1);
  });
  test("returns index of the last element match", () => {
    expect(lastIndexFound([0, 2, 3, 5, 9], 9)).toBe(4);
    expect(lastIndexFound([5, 2, 3, 5, 9], 5)).toBe(3);
  });
});

describe("timesIndex", () => {
  test("returns new array with each element multiplied by its index", () => {
    expect(timesIndex([2, 2, 2])).toEqual([0, 2, 4]);
    expect(timesIndex([1, 2, 3, 4, 5])).toEqual([0, 2, 6, 12, 20]);
    expect(timesIndex([])).toEqual([]);
  });
});

describe("cumulativeSum", () => {
  test("returns new array with each element is the cumulative sum", () => {
    expect(cumulativeSum([2, 2, 2])).toEqual([2, 4, 6]);
    expect(cumulativeSum([5, 2, 9])).toEqual([5, 7, 16]);
    expect(cumulativeSum([])).toEqual([]);
  });
});
