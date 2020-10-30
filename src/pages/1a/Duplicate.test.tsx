import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Duplicate } from "./Duplicate";

it("renders correctly", () => {
  const { queryByTestId, queryByPlaceholderText } = render(<Duplicate />);
  expect(queryByTestId("input-group")).toBeTruthy();
  expect(queryByPlaceholderText("Duplicate")).toBeTruthy();
});

describe("task validation", () => {
  it("updates on сhange", () => {
    const { queryByPlaceholderText } = render(<Duplicate />);
    const duplicateInput: any = queryByPlaceholderText("Duplicate");
    fireEvent.change(duplicateInput, { target: { value: "test" } });
    expect(duplicateInput.value).toBe("test");
  });

  it("checking for duplicate string", async () => {
    const { queryByTestId, queryByPlaceholderText, findByTestId } = render(
      <Duplicate />
    );

    const duplicateBtn: any = queryByTestId("input-group");
    const duplicateInput: any = queryByPlaceholderText("Duplicate");

    fireEvent.change(duplicateInput, { target: { value: "123456" } });
    const result: number = duplicateInput.value.length;

    fireEvent.click(duplicateBtn);
    const duplicateOutput: any = (await findByTestId("outputDuplicate"))
      .textContent?.length;

    expect(duplicateOutput).toBe(result * 2);
  });
});
