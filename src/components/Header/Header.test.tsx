import { render } from "@testing-library/react";
import Header from ".";

describe("handles the app header", () => {
  test("renders header", () => {
    render(<Header />);
  });
});
