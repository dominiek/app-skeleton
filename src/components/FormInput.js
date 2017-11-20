
import React from 'react';
import { Form } from 'semantic-ui-react';

export default function FormInput({
  input,
  type,
  label,
  placeholder,
  meta: { touched },
  as: As = 'input', ...props
}) {
  function handleChange(e, { value }) {
    return input.onChange(value);
  }
  return (
    <As
      {...props}
      {...input}
      label={label}
      value={input.value}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}
