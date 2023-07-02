import React from "react";
import { RouteProps } from "react-router";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../compontents/forms/loginForm/LoginForm";
import { LoginRegisterLayout } from "../../layouts/loginRegisterLayout";

export interface LoginFormRequest {
    email: string;
    password: string;
}

export const LoginPage: React.FC<RouteProps> =  () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log("Submit");
        navigate("/dashboard");
    };
    
    return (
        <LoginRegisterLayout>
            <div className="loginPage">
                <div className="login">
                    <h3 className="signIntoAccount">Sign In:</h3>
                    <LoginForm onSubmit={handleSubmit} />
                </div>
            </div>
        </LoginRegisterLayout>
    )
}
