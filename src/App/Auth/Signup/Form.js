import React from 'react';
import FormInput from 'components/FormInput';
import FormCheckbox from 'components/FormCheckbox';
import { Field } from 'react-final-form';
import { Form, Input, Button, Checkbox } from 'semantic-ui-react';
import { email } from 'utils/validate';

export default (props) => {
  const { handleSubmit, submitting, errors } = props;
  return (
    <Form
      error={Object.keys(errors).length > 0}
      size="large"
      onSubmit={handleSubmit}
    >
      <Form.Field>
        <Field
          name="email"
          component={FormInput}
          as={Input}
          icon="mail"
          iconPosition="left"
          placeholder="E-mail Address"
          type="text"
          autoComplete="email"
          validate={email}
        />
        <Field
          component={FormCheckbox}
          as={Checkbox}
          name=""
          label={
            <label>
              It's ok to send me (very occasional) email about the service.
            </label>
          }
        />
      </Form.Field>
      <Button primary size="large" content="Signup" loading={submitting} />
    </Form>
  );
};
