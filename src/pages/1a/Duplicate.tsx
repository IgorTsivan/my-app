import React, { useState } from "react";
import { InputGroup } from "../../components/InputGroup";

export const Duplicate: React.FC = () => {
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

  const duplicateTask = (x: string): string[] => {
    let toArr = x.split("");
    return [...toArr, ...toArr];
  };

  return (
    <div className="container task_box">
      <div className="row">
        <div className="col">
          <h2 className="center">Duplicate method task</h2>
        </div>
      </div>
      <div className="row">
        <div className="col task">
          <InputGroup
            test={"input-group"}
            placeholderInput={"Duplicate"}
            type={"text"}
            changeHandler={changeInput}
            enterHandler={keyHandler}
            getValue={inputValue}
            btnHandler={submitHandler}
            btnClass={"btn btn-primary"}
          />
        </div>
      </div>
      <div className="row output">
        <div className="box">
          <p data-testid="outputDuplicate">{duplicateTask(output.trim())}</p>
        </div>
      </div>
    </div>
  );
};
