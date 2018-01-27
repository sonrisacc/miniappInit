function findMax(start, end, inputArr) {
  let tempMaxIndex = -Infinity;

  for (let i = start; i < end; i++) {
    if (
      inputArr[i] >= inputArr[tempMaxIndex] ||
      inputArr[tempMaxIndex] === undefined
    ) {
      tempMaxIndex = i;
    }
  }
  return tempMaxIndex;
}

const collectDrops = input => {
  // Rule out invalid input
  if (!Array.isArray(input)) return 'not valid input';
  if (input.length <= 1) return [0, 0, 0];

  let result = [];
  for (let i = 0; i < input.length; i++) {
    // find leftMax & right Max
    let leftIndex = findMax(0, i, input);
    let rightIndex = findMax(i + 1, input.length, input);
    // find minWall
    let leftVal = input[leftIndex];
    let rightVal = input[rightIndex];

    let minWall = Math.min(leftVal, rightVal);

    // find a drop
    if (input[i] < minWall) {
      // if not between the same wall
      if (result[0] !== leftIndex || result[1] !== rightIndex) {
        // if cur water is not larger then result, leave
        if (minWall - input[i] < result[2]) break;
        // only update result when cur water > result
        result[0] = leftIndex;
        result[1] = rightIndex;
        result[2] = minWall - input[i];
      } else {
        // if does between the same wall
        result[2] += minWall - input[i];
      }
    }
  }
  // if no water
  if (result.length === 0) return [0, 0, 0];

  // refine wall index
  result[0] += 1;
  result[1] += 1;
  return result;
};

module.exports = collectDrops;
