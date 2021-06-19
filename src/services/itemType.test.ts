import itemsType from "./itemType";

it("returns All", () => {
  expect(itemsType("all", "all")).toBe("All");
});
it("returns Multiple", () => {
  expect(itemsType("multiple", "all")).toBe("Multiple");
  expect(itemsType("multiple", "multiple")).toBe("Multiple");
  expect(itemsType("all", "multiple")).toBe("Multiple");
});

it("returns all string", () => {
  ["red", "blue", "yello"].forEach((color) => {
    expect(itemsType(color, "all")).toBe(`all ${color}`);
  });
});
it("returns multiple string", () => {
  ["red", "blue", "yello"].forEach((color) => {
    expect(itemsType(color, "multiple")).toBe(`multiple ${color}`);
  });
});
