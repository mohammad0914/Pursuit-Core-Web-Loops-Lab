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
  })
});
describe("fizzBuzzPart2", () => {
  test("returns an array of length 100", () => {
    expect(fizzBuzzPart2().length).toBe(100);

  });
  test("returns correct array", () => {
    const arr = Array(100)
      .fill(null)
      .map((_, i) => {
        if(!((i + 1) % 3) && !((i + 1) % 5)) return "FizzBuzz"
        else if ((i + 1) % 3) return "Fizz";
        else if ((i + 1) % 5) return "Buzz";
        else return i + 1;
      });
    expect(fizzBuzzPart2()).toEqual(arr);
  })
});
