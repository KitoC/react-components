import { Message, Input as RInput } from "rsuite";
import React, { ForwardedRef } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";

import get from "lodash/get";
import styled from "styled-components";

export interface IInputProps {
  label?: string;
  name: string;
  labelDirection?: "row" | "column";
  registerProps?: RegisterOptions;
}

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  padding-bottom: 8px;
  height: fit-content;
`;

const StyledInput = styled(RInput)`
  margin-bottom: 12px;
`;

const StyledMessage = styled(Message)`
  margin-bottom: 12px;

  .rs-message-container {
    padding: 12px;
  }
`;

export const Input = (props: IInputProps) => {
  const { label, name, registerProps } = props;
  const { formState, register } = useFormContext();

  const error = get(formState, ["errors", name], null);

  const { onChange, ...field } = register(name, registerProps);

  return (
    <StyledInputContainer>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        id={name}
        {...field}
        onChange={(_: any, e: React.SyntheticEvent) => onChange(e)}
      />

      {error && (
        <StyledMessage type="error">
          <strong>{error?.type}</strong>
          {error.message}
        </StyledMessage>
      )}
    </StyledInputContainer>
  );
};
