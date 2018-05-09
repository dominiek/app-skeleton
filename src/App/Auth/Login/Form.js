import React from 'react';
import FormInput from 'components/FormInput';
import { Field } from 'react-final-form';
import { Form, Input, Button } from 'semantic-ui-react';
import { email, password } from 'utils/validate';

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
          name="password"
          component={FormInput}
          as={Input}
          icon="lock"
          iconPosition="left"
          placeholder="Password"
          autoComplete="current-password"
          type="password"
        />
      </Form.Field>
      <Button fluid primary size="large" content="Login" loading={submitting} />
    </Form>
  );
};
