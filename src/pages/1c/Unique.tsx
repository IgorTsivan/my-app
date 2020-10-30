import React, { useState } from "react";
import { InputGroup } from "../../components/InputGroup";

export const Unique: React.FC = () => {
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

  const uniqueTask = (x: string): string[] => {
    let result: string[] = [];

    for (let uid of x) {
      if (!result.includes(uid)) {
        result.push(uid);
      }
    }
    return result;
  };

  return (
    <div className="container task_box">
      <div className="row">
        <div className="col">
          <h2 className="center">Unique method task</h2>
        </div>
      </div>
      <div className="row">
        <div className="col task">
          <InputGroup
            test={"input-group"}
            placeholderInput={"Unique method"}
            type={"text"}
            changeHandler={changeInput}
            enterHandler={keyHandler}
            getValue={inputValue}
            btnHandler={submitHandler}
            btnClass={"btn btn-danger"}
          />
        </div>
      </div>
      <div className="row output">
        <div className="box">
          <p data-testid="outputUnique">{uniqueTask(output.trim())}</p>
        </div>
      </div>
    </div>
  );
};
