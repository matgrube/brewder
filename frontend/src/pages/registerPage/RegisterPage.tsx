import React from "react";
import { RouteProps } from "react-router";
import {Link, useNavigate} from "react-router-dom";
import LoginForm from "../../compontents/forms/loginForm/LoginForm";
import { LoginRegisterLayout } from "../../layouts/loginRegisterLayout";

export const RegisterPage: React.FC<RouteProps> = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log("Submit");
        navigate("/login");
    };
    
    return (
        <LoginRegisterLayout>
            <div className="registerPage">
                <div className="register">
                    <h3 className="registerAccount">Register:</h3>
                    <p className="info">Already have an account?</p>
                    <LoginForm onSubmit={handleSubmit} />
                </div>
            </div>
        </LoginRegisterLayout>
    )
}
