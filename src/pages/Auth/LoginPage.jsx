import React from "react";
import "./index.css";
import { Button, Input } from "../../components";
import facebookLogo from "../../assets/fslogo.svg";
const LoginPage = () => {
  return (
    <div className="log_container">
      <div className="log_form">
        <h1 className="login_header">Log In To Facebook</h1>
        <Input placeholder={"email or phone number"} className="login_input" />
        <Input placeholder={"password"} className="login_input" />

        <Button name={"Login"} className="login_btn" />
        <Button name={"Do you forgot your password"} className="another_link" />
        <hr className="newsection" />
        <Button name={"create new account"} className="signup_btn" />
      </div>
      <div className="log_info">
        <div className="log_holder">
          <img src={facebookLogo} alt="facbook logo" width={240} />
        </div>
        <div className="log_info_holder">
          <p>
            Facebook gives you the ability to connect with people and share what
            you want with them
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
