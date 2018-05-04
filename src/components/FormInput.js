import React from 'react';
import { Form, Label } from 'semantic-ui-react';

export default function FormInput({
  input,
  type,
  label,
  placeholder,
  as: As = Form.Input,
  meta,
  beforeInput,
  ...props
}) {
  function handleChange(e, { value }) {
    return input.onChange(value);
  }

  return (
    <Form.Field error={Boolean(meta.error && meta.touched)}>
      {beforeInput}
      <As
        {...props}
        {...input}
        label={label}
        value={input.value}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {meta.touched &&
        meta.error && (
          <Label color="red" basic pointing>
            {meta.error}
          </Label>
        )}
    </Form.Field>
  );
}
