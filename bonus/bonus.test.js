const {
  ninetyNineBottlesOfBeerOnTheWall,
  drawSquare,
  multiplesOf3And5Sum,
} = require("./bonus");

const ninetyNineBottlesOfBeerOnTheWallSolution = () => {
  let output = [];
  for (let i = 99; i > 2; i--) {
    output.push(
      `${i} bottles of beer on the wall, ${i} bottles of beer. Take one down, pass it around, ${
        i - 1
      } bottles of beer on the wall.`
    );
  }
  output.push(
    `2 bottles of beer on the wall, 2 bottles of beer. Take one down, pass it around, 1 bottle of beer on the wall.`
  );
  output.push(
    `1 bottle of beer on the wall, 1 bottle of beer. Take one down, pass it around, No more bottle of beer on the wall.`
  );

  return output;
};

describe("ninetyNineBottlesOfBeerOnTheWall", () => {
  test("correctly returns an array with each element is the next verse", () => {
    expect(ninetyNineBottlesOfBeerOnTheWall()).toEqual(
      ninetyNineBottlesOfBeerOnTheWallSolution()
    );
  });
});

describe("drawSquare", () => {
  test("gives back an array of strings", () => {
    expect(drawSquare(0)).toEqual([]);
    expect(drawSquare(1)).toEqual(["*"]);
    expect(drawSquare(2)).toEqual(["**", "**"]);
    expect(drawSquare(3)).toEqual(["***", "***", "***"]);
  });
});

describe("multiplesOf3And5Sum", () => {
    test("finds the sume of all all multiples of 3 or 5 below 1000", () => {
        let sum = new Array(999).fill(null).map((_, i) => !((i + 1) % 3) || !((i + 1) % 5) ? i + 1 : 0).reduce((a, b) => a + b)
        expect(multiplesOf3And5Sum()).toBe(sum)
    })
});
