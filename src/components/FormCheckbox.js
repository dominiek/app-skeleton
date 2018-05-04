import React from 'react';
import { Form } from 'semantic-ui-react';

export default function FormInput({
  input,
  label,
  as: As = Form.Checkbox,
  meta,
  ...props
}) {
  function handleChange(e, { checked }) {
    return input.onChange(checked);
  }

  return (
    <Form.Field error={Boolean(meta.error && meta.touched)}>
      <As
        {...props}
        label={label}
        checked={Boolean(input.value)}
        onChange={handleChange}
      />
    </Form.Field>
  );
}
