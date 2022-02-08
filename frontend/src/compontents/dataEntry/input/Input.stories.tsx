import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Input, InputProps, PasswordInput, PasswordInputProps, UserInput } from "./Input";

export default {
  title: "components/Inputs/Input",
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />
const PasswordTemplate: Story<PasswordInputProps> = (args) => <PasswordInput {...args} />
const UserTemplate: Story<InputProps> = (args) => <UserInput {...args} />

export const Default = Template.bind({});
export const Password = PasswordTemplate.bind({});
export const User = UserTemplate.bind({});
