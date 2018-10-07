import { bar } from "../bar";

describe("foo", () => {
  it("returns 4 from 2", () => {
    const result = bar(2);
    expect(result).toBe(6);
  });
});
