import React from "react";
import {BrowserRouter, Routes as ReactRoutes, Route} from "react-router-dom";
import {LoginPage} from "../pages/loginPage/LoginPage";

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
          <Route path="/login" element={LoginPage} />
        <Route path="*" element={<LoginPage />} />
      </ReactRoutes>
    </BrowserRouter>
  )
}
