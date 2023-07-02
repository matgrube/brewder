import React from "react";
import { LoginForm } from "../../compontents/loginForm/LoginForm";
import {LoginRegisterLayout} from "../../layouts/loginRegisterLayout/LoginRegisterLayout";

export const LoginPage: React.FC = () => {
  return (
    <div className="loginPage">
        <LoginRegisterLayout children={LoginForm} />
    </div>
  )
}
