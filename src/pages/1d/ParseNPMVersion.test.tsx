import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ParseNPMVersion } from "./ParseNPMVersion";

it("renders correctly", () => {
  const { queryByTestId, queryByPlaceholderText } = render(<ParseNPMVersion />);
  expect(queryByTestId("input-group")).toBeTruthy();
  expect(queryByPlaceholderText("ParseNPMVersion")).toBeTruthy();
});

describe("task validation", () => {
  it("updates on сhange", () => {
    const { queryByPlaceholderText } = render(<ParseNPMVersion />);
    const parseInput: any = queryByPlaceholderText("ParseNPMVersion");
    fireEvent.change(parseInput, { target: { value: "test" } });
    expect(parseInput.value).toBe("test");
  });

  it("checking parse of version", async () => {
    const { queryByTestId, findByTestId, queryByPlaceholderText } = render(
      <ParseNPMVersion />
    );

    const parseBtn: any = queryByTestId("input-group");
    const parseInput: any = queryByPlaceholderText("ParseNPMVersion");
    fireEvent.change(parseInput, {
      target: { value: "@webscopeio/react-textarea-autocomplete@4.6.1" },
    });
    const parseInputValue: string = parseInput.value;

    fireEvent.click(parseBtn);
    const parseOutput: any = (await findByTestId("outputParseNPMVersion"))
      .textContent;

    const parseNPMVersionTask = (x: string): string => {
      const reg: RegExp = /@[0-9]{1,5}.[0-9]{1,5}.[0-9]{1,5}/;
      const version: any = x.match(reg);
      const name: string = x.split(version, 1).join("");
      return `Name: ${name}, Version: ${version === null ? "" : version}`;
    };

    expect(parseOutput).toBe(parseNPMVersionTask(parseInputValue));
  });
});
