import {Form, Formik} from "formik";
import React from "react";

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

                </Form>
            </Formik>
        </div>
    )
}