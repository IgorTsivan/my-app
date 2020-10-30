import React from "react";

type Props = {
  check: boolean;
  email: string;
  password: string;
  submitHandler: any;
  passwordHandler: any;
  emailHandler: any;
  checkHandler: any;
};

export const Form: React.FC<Props> = (props: Props) => (
  <form>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">
        <b>E-mail</b>
      </label>
      <input
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="e.g.jhon.doe@gmail.com"
        value={props.email}
        onChange={props.emailHandler}
      />
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">
        <b>Password</b>
      </label>
      <input
        type="password"
        className="form-control"
        id="exampleInputPassword1"
        placeholder="●●●●●●●●●●●●●"
        value={props.password}
        onChange={props.passwordHandler}
      />
    </div>
    <div className="form-group form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id="exampleCheck1"
        checked={props.check}
        onChange={props.checkHandler}
      />
      <label className="form-check-label" htmlFor="exampleCheck1">
        Agree with <a href="/">Terms & Conditions</a>
      </label>
    </div>
    <div className="submit">
      <button
        type="submit"
        className="btn btn-submit btn-primary"
        onClick={props.submitHandler}
      >
        Login
      </button>
      <br />
      <a href="/">Forgotten password?</a>
    </div>
  </form>
);
