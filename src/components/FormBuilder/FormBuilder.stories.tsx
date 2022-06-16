import { ComponentMeta, ComponentStory } from "@storybook/react";

import { FormBuilder } from "./index";
import React from "react";

export default {
  title: "Components/FormBuilder",
  component: FormBuilder,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof FormBuilder>;

const Template: ComponentStory<typeof FormBuilder> = (args) => <FormBuilder />;

export const Default = Template.bind({});

Default.args = {};
