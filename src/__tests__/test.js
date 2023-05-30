import showHealth from '../game';

test.each([
  [70, 'healthy'],
  [45, 'wounded'],
  [9, 'critical'],
])('testing with %i health', (amount, expected) => {
  const result = showHealth({ health: amount });
  expect(result).toBe(expected);
});
