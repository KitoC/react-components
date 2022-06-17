import { ComponentMeta, ComponentStory } from "@storybook/react";

import { LoginForm } from "./LoginForm";
import React from "react";

export default {
  title: "Forms/LoginForm",
  argTypes: {},
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm />;

export const Default = Template.bind({});

Default.args = {};
