import { screen, render, fireEvent } from "@testing-library/react";
import FilterByShape from ".";

it("renders", () => {
  const setShapes = jest.fn();
  render(
    <FilterByShape
      shapes={{ circle: false, square: true }}
      setShapes={setShapes}
    />
  );

  const circle = screen.getByLabelText("circle") as HTMLInputElement;

  expect(circle.checked).toBeFalsy();

  const square = screen.getByLabelText("square") as HTMLInputElement;

  expect(square.checked).toBeTruthy();

  fireEvent.click(square);

  expect(setShapes).toHaveBeenCalled();

  fireEvent.click(circle);

  expect(setShapes).toHaveBeenCalledTimes(2);
});
