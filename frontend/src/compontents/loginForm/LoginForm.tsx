import {Form, Formik} from "formik";
import React from "react";
import {Input, UserInput} from "../dataEntry/input/Input";

export interface LoginFormProps {
    email: string;
    password: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({
    email,
    password
}) => {
    const handleSubmit = () => {
        console.log("Submit");
    }
    return (
        <div className="loginForm">
            <Formik initialValues={{email, password}} onSubmit={handleSubmit} enableReinitialize={true}>
                <Form>
                    <UserInput name="email" className="email" placeholder="E-mail" onChange={(e) => console.log(e)} label="Email" />
                </Form>
            </Formik>
        </div>
    )
}
