import { sum } from './util';

it('should return 0 when no parameters', () => {
  expect(sum()).toBe(0);
});

it('sum adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
