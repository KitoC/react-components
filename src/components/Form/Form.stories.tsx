import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Form, Input } from "./index";

import { Button } from "rsuite";
import React from "react";

export default {
  title: "Components/Form",
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => (
  <Form onSubmit={(values) => alert(JSON.stringify(values))}>
    <Input name="input" label="Input" />

    <Button type="submit" appearance="primary">
      Submit
    </Button>
  </Form>
);

export const Default = Template.bind({});
