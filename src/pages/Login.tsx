import React, { useState } from "react";
import { Form } from "../components/Form";

type Props = {
  auth: Function;
};

export const Login: React.FC<Props> = (props: Props) => {
  const [pass, setPass] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const getSubmit = (event: React.ChangeEvent<HTMLInputElement>): boolean => {
    event.preventDefault();
    const validMail: boolean = validateEmail(mail);
    if (!validMail) {
      alert("Confirm valid Email");
      return false;
    }
    if (pass.length < 1) {
      alert("Password is empty");
      return false;
    }
    if (!checked) {
      alert("You dont agree to the terms");
      return false;
    } else {
      alert(`Password: ${pass}, Email: ${mail}`);
      props.auth(true);
      return true;
    }
  };
  const getPassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPass(event.target.value);
  };
  const getEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setMail(event.target.value);
  };
  const getChecked = (): void => {
    setChecked(!checked);
  };

  return (
    <div className="container form">
      <div className="row">
        <div className="col title__block">
          <h2>Log in to Example</h2>
          <a href="/">or create an account</a>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Form
            check={checked}
            email={mail}
            password={pass}
            submitHandler={getSubmit}
            passwordHandler={getPassword}
            emailHandler={getEmail}
            checkHandler={getChecked}
          />
        </div>
      </div>
    </div>
  );
};
