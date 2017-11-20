import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FormInput from 'components/FormInput';
import { Form, Input, Button } from 'semantic-ui-react';

const LoginForm = (props) => {
  const { handleSubmit, submitting } = props;
  return (
    <Form size="large" onSubmit={handleSubmit}>
      <Form.Field>
        <Field
          component={FormInput}
          as={Input}
          name="email"
          icon="user"
          iconPosition="left"
          placeholder="E-mail Address"
          type="text"
        />
      </Form.Field>
      <Form.Field>
        <Field
          component={FormInput}
          as={Input}
          name="password"
          iconPosition="left"
          placeholder="Password"
          icon="lock"
          type="password"
        />
      </Form.Field>
      <Button
        fluid
        primary
        loading={submitting}
        size="large"
        content="Login"
      />
    </Form>
  );
};

export default reduxForm({
  form: 'login'
})(LoginForm);
