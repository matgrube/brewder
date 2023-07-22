import React from "react";
import {BrowserRouter, Routes as ReactRoutes, Route} from "react-router-dom";
import {LoginPage} from "../pages/loginPage/LoginPage";
import {RegisterPage} from "../pages/registerPage/RegisterPage";

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<LoginPage />} />
      </ReactRoutes>
    </BrowserRouter>
  )
}
