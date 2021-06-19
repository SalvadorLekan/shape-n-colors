import count from "./count";

it("returns all", () => {
  expect(count(new Set([""]), 1)).toBe("all");
});

it("returns none", () => {
  expect(count(new Set(), 1)).toBe("none");
});
it("returns multiple", () => {
  expect(count(new Set(["", "s", "l"]), 4)).toBe("multiple");
});
it("returns red", () => {
  expect(count(new Set(["red"]), 4)).toBe("red");
});
