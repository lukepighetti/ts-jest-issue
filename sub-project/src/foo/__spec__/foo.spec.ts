// if you uncomment this line, `jest` becomes available in all tests
// `npm test` works regardless

// import "jest"; // uncomment this line, then check sub-project/src/bar/__spec__/bar.spec.ts

import { foo } from "../foo";

describe("foo", () => {
  it("returns 4 from 2", () => {
    const result = foo(2);
    expect(result).toBe(4);
  });
});
