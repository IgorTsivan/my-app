import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Last } from "./Last";

it("renders correctly", () => {
  const { queryByTestId, queryByPlaceholderText } = render(<Last />);
  expect(queryByTestId("input-group")).toBeTruthy();
  expect(queryByPlaceholderText("Last method")).toBeTruthy();
});

describe("task validation", () => {
  it("updates on сhange", () => {
    const { queryByPlaceholderText } = render(<Last />);
    const lastInput: any = queryByPlaceholderText("Last method");
    fireEvent.change(lastInput, { target: { value: "test" } });
    expect(lastInput.value).toBe("test");
  });

  it("check the output of the last character", async () => {
    const { queryByTestId, findByTestId, queryByPlaceholderText } = render(
      <Last />
    );

    const lastBtn: any = queryByTestId("input-group");
    const lastInput: any = queryByPlaceholderText("Last method");
    fireEvent.change(lastInput, { target: { value: "test1" } });
    const result: string = lastInput.value.split("");

    fireEvent.click(lastBtn);
    const lastOutput: any = (await findByTestId("outputLast")).textContent;
    lastOutput.split("");
    expect(lastOutput[lastOutput.length - 1]).toBe(result[result.length - 1]);
  });
});
