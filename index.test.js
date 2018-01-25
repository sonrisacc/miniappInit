const collectDrops = require('./index.js');

test('shoud collectDrops return an array', () => {
  expect(Array.isArray(collectDrops([3, 1, 1, 3]))).toBe(true);
});

test('shoud collectDrops return [0,0,0] when no water [1,2,3]', () => {
  expect(collectDrops([1, 2, 3])).toBe([0, 0, 0]);
});

test('shoud collectDrops return [0,0,0] when no water [3,2,1]', () => {
  expect(collectDrops([3, 2, 1])).toBe([0, 0, 0]);
});

test('shoud collectDrops return [0,0,0] when no water [1,2,1]', () => {
  expect(collectDrops([1, 2, 1])).toBe([0, 0, 0]);
});

test('shoud collectDrops return [0,0,0] when no wall', () => {
  expect(collectDrops([])).toBe([0, 0, 0]);
});

test('shoud collectDrops return coorrect amount of water', () => {
  expect(collectDrops([3, 1, 3])).toBe([0, 2, 2]);
});
