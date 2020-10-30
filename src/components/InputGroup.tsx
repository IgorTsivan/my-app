import React from "react";

type Props = {
  type: string;
  changeHandler: any;
  enterHandler: any;
  btnHandler: any;
  getValue: string | number;
  btnClass: string;
  placeholderInput: string;
  test: string;
};

export const InputGroup: React.FC<Props> = (props: Props) => (
  <>
    <input
      type={props.type}
      onChange={props.changeHandler}
      onKeyUp={props.enterHandler}
      value={props.getValue}
      placeholder={props.placeholderInput}
      
    />
    <button onClick={props.btnHandler} className={props.btnClass} data-testid={props.test}>
      Run task
    </button>
  </>
);
