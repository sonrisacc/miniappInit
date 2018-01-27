# waterFall

## Initial Setup

1. Fork and clone the repo
2. Install dependencies from the root of the repo by running

```sh
npm install
```

3. Start charSortII in dev mode by running:

```sh
npm run build
npm run dev
```

or Start charSortII by running:

```sh
npm start
```

4. Run test by running:

```sh
npm test
```

> **NOTE**
> We are going to represent a series of walls of different integer heights.
> Your goal is to determine which two walls have the most water trapped between them, and exactly how much water that is.

// no constraints
// time complexity: linear, since we are iterate through every element
// space complexity: constant, keep updating itself

// given an input arr(which holds n element)
// iterate through arr
// at each cur position
// find the left max wall, and right max wall
// take the min wall, compare with the cur number
// cur > min, no water
// cur < min,
//compare tempResult[0] & ..[1] (wall index)
//if not same, compare w tempResult[2]
//if cur > origin update tempResult
//if same, update tempResult[2]

let result = [0, 0, 0];
let temLeftIndex = 0;
let temRightIndex = 0;
let tempResult =[0,0,0]

//input: [5,1,9,3,2,7]
// @ 5
// leftMaxIndex --> 0 (5)
// rightMaxIndex --> 2 (9)
// minMaxValue --> 9 vs null --> null
// cur(5) > minMax(null) --> true --> do nothing
// @ 1
// leftMax --> 0 (5)
// rightMax -->2 (9)
// minMax --> 5 vs 9 --> 5
// cur(1) > minMax(5) --> false --> drop = 4
tempResult[0,2,4] vs result [0, 0, 0];
update result = [0, 2, 4]
// @ 9
// leftMax --> 0 (5)
// rightMax -->5 (7)
// minMax --> 5 vs 7 --> 5
// cur(9) > minMax(5) --> true --> do nothing
// @ 3
// leftMax --> 2 (9)
// rightMax -->5 (7)
// minMax --> 9 vs 7 --> 7
// cur(3) > minMax(7) --> false -->
// tempResult = [2,5,4] vs result [0, 2, 4];
// update result [2,5,4]
....
//@ 7
// leftMax --> 9
// rightMax --> null
// minMax --> 9 vs null --> null
// cur(7) > minMax(null) --> true --> do nothing  
// output: [2, 5, 9]
