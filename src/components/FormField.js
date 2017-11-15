

import React from 'react';
import { Form } from 'semantic-ui-react';

export default function FormField({
  input,
  type,
  label,
  placeholder,
  meta: { touched, error },
  as: As = 'input', ...props
}) {
  function handleChange(e, { value }) {
    return input.onChange(value);
  }

  return (
    <Form.Field>
      <label>
        { label }
        { touched &&
          (
            (error &&
              <span style={{ color: '#db2828', marginLeft: '10px' }}>
                <i>{error}</i>
              </span>
            )
          )
        }
        <As
          {...props}
          {...input}
          value={input.value}
          type={type}
          error={touched && error}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </label>
    </Form.Field>
  );
}