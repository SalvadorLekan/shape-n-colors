import { fireEvent, render, screen } from "@testing-library/react";
import FilterByColor from ".";

it("renders", () => {
  const setColors = jest.fn();
  render(
    <FilterByColor colors={{ blue: false, red: true }} setColors={setColors} />
  );

  const blue = screen.getByLabelText("blue") as HTMLInputElement;

  expect(blue.checked).toBeFalsy();

  const red = screen.getByLabelText("red") as HTMLInputElement;

  expect(red.checked).toBeTruthy();

  fireEvent.click(red);

  expect(setColors).toHaveBeenCalled();

  fireEvent.click(blue);

  expect(setColors).toHaveBeenCalledTimes(2);
});
