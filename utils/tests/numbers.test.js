import { formatNumber, getPercentage } from "../numbers.js";

test("get simple percentage", () => {
  expect(getPercentage(30, 100)).toBe(30);
});

test("get rounded result", () => {
  expect(getPercentage(500, 5001)).toBe(9);
});

test("with float number", () => {
  expect(getPercentage(48.5, 150.3)).toBe(32);
});
