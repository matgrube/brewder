import React from "react";
import {LayoutProps} from "../../interfaces/layoutInterfaces/LayoutInterfaces";

export const LoginRegisterLayout: React.FC<LayoutProps> = ({children, ...props}) => {
    return (
        <div className="loginRegisterLayout">
            <div className="logoField">
            </div>
            <div className="contentField">
                {children}
            </div>
        </div>
    )
}
