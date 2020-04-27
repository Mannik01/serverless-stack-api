import { calculateCost } from "../libs/billing-lib";

test("Lowest Tier", () => {
  const storage = 10;
  const expectedCost = 4000;
  const actualCost = calculateCost(storage);

  expect(expectedCost).toEqual(actualCost);
});

test("Highest Tier", () => {
  const storage = 101;
  const expectedCost = 10100;
  const actualCost = calculateCost(storage);

  expect(expectedCost).toEqual(actualCost);
});
