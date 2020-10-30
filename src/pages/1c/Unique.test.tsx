import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Unique } from "./Unique";

it("renders correctly", () => {
  const { queryByTestId, queryByPlaceholderText } = render(<Unique />);
  expect(queryByTestId("input-group")).toBeTruthy();
  expect(queryByPlaceholderText("Unique method")).toBeTruthy();
});

describe("task validation", () => {
  it("updates on сhange", () => {
    const { queryByPlaceholderText } = render(<Unique />);
    const uniqueInput: any = queryByPlaceholderText("Unique method");
    fireEvent.change(uniqueInput, { target: { value: "test" } });
    expect(uniqueInput.value).toBe("test");
  });

  it("checking for unique value", async () => {
    const { queryByTestId, findByTestId, queryByPlaceholderText } = render(
      <Unique />
    );

    const uniqueBtn: any = queryByTestId("input-group");
    const uniqueInput: any = queryByPlaceholderText("Unique method");
    fireEvent.change(uniqueInput, { target: { value: "test" } });
    const uniqueInputValue: string = uniqueInput.value;

    fireEvent.click(uniqueBtn);
    const uniqueOutput: any = (await findByTestId("outputUnique")).textContent;

    const uniqueTask = (x: string): string => {
      let result: any[] = [];
      for (let uid of x) {
        if (!result.includes(uid)) {
          result.push(uid);
        }
      }
      return result.join("");
    };
    expect(uniqueOutput).toBe(uniqueTask(uniqueInputValue));
  });
});
