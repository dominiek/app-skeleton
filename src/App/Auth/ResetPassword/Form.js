import React from 'react';
import FormInput from 'components/FormInput';
import { Field } from 'react-final-form';
import { Form, Input, Button } from 'semantic-ui-react';
import { password } from 'utils/validate';

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
          name="password"
          component={FormInput}
          as={Input}
          icon="lock"
          iconPosition="left"
          placeholder="Password"
          autoComplete="new-password"
          type="password"
          validate={password}
        />
      </Form.Field>
      <Button
        fluid
        primary
        size="large"
        content="Reset Password"
        loading={submitting}
      />
    </Form>
  );
};
