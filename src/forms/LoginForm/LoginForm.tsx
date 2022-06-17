import { Form, Input } from "../../components/Form";

import { Button } from "rsuite";
import React from "react";

export const LoginForm = () => {
  const onSubmit = (data: any) => console.log({ data });

  return (
    <Form onSubmit={onSubmit}>
      <Input labelDirection="row" label="Email" name="email" />
      <Input
        label="Password"
        name="password"
        registerProps={{ required: true }}
      />
      <Button type="submit" appearance="primary">
        Submit
      </Button>
    </Form>
  );
};
