import React from "react";
import { Input as AntInput } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";

export interface InputProps {
  name: string;
  placeholder: string;
  className: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  label?: string;
  size?: SizeType;
  prefix?: any;
}

export interface PasswordInputProps extends InputProps {
  visibilityToggle: boolean;
}

export const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  className,
  onChange,
  error,
  label,
    size= "large",
}) => {
  return (
    <div className="input">
      <div className="inputContainer">
        {!!label && (
          <label htmlFor={name} className="label">{label}</label>
        )}
        <AntInput type="text" name={name} placeholder={placeholder} onChange={onChange} />
      </div>
      <div className="validationContainer">
        <p className="validationError">{error ? error : ""}</p>
      </div>
    </div>
  )
}
export const PasswordInput: React.FC<PasswordInputProps> = ({
  name,
  placeholder,
  className,
  onChange,
  error,
  visibilityToggle,
    size= "large",
}) => {
  return (
    <div className="input">
      <div className="inputContainer">
        <AntInput.Password type="password" name={name} placeholder={placeholder} className={className} onChange={onChange} visibilityToggle={visibilityToggle} prefix={<KeyOutlined />} />
      </div>
      <div className="validationContainer">
        <p className="validationError">{error ? error : ""}</p>
      </div>
    </div>
  )
}

export const UserInput: React.FC<InputProps> = ({
    name,
    placeholder,
    className,
    onChange,
    error,
    label,
    size= "large",
}) => {
    return (
        <div className="input">
            <div className="inputContainer">
                {!!label && (
                    <label htmlFor={name} className="label">{label}</label>
                )}
                <AntInput type="text" name={name} placeholder={placeholder} onChange={onChange} prefix={<UserOutlined />} />
            </div>
            <div className="validationContainer">
                <p className="validationError">{error ? error : ""}</p>
            </div>
        </div>
    )
}
