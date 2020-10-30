import React, { useState } from "react";
import { InputGroup } from "../../components/InputGroup";

export const ParseNPMVersion: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };
  const keyHandler = (event: React.KeyboardEvent): void => {
    if (event.key === "Enter") {
      setOutput(inputValue);
      setInputValue("");
    }
  };
  const submitHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setOutput(inputValue);
    setInputValue("");
  };

  const parseNPMVersionTask = (x: string): string => {
    const reg: RegExp = /@[0-9]{1,5}.[0-9]{1,5}.[0-9]{1,5}/;
    const version: any = x.match(reg);
    const name: string = x.split(version, 1).join("");
    return `Name: ${name}, Version: ${version === null ? "" : version}`;
  };

  return (
    <div className="container task_box">
      <div className="row">
        <div className="col">
          <h2 className="center">ParseNPMVersion method task</h2>
        </div>
      </div>
      <div className="row">
        <div className="col task">
          <InputGroup
            test={"input-group"}
            placeholderInput={"ParseNPMVersion"}
            type={"text"}
            changeHandler={changeInput}
            enterHandler={keyHandler}
            getValue={inputValue}
            btnHandler={submitHandler}
            btnClass={"btn btn-warning"}
          />
        </div>
      </div>
      <div className="row output">
        <div className="box">
          <p data-testid="outputParseNPMVersion">
            {parseNPMVersionTask(output.trim())}
          </p>
        </div>
      </div>
    </div>
  );
};
