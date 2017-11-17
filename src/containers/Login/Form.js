import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FormField from 'components/FormField';
import { Form, Segment, Button } from 'semantic-ui-react';

const LoginForm = (props) => {
  const { handleSubmit, submitting } = props;
  return (
    <Form size="large" onSubmit={handleSubmit}>
      <Segment stacked>
        <Field
          name="email"
          component={FormField}
          as={Form.Input}
          type="text"
          label="E-mail address"
          placeholder="person@company.com"
          icon="user"
          iconPosition="left"
        />
        <Field
          name="password"
          label="Password"
          type="password"
          as={Form.Input}
          component={FormField}
          icon="lock"
          iconPosition="left"
        />
        <Button
          primary
          loading={submitting}
          fluid
          size="large"
        >
          Login
        </Button>
      </Segment>
    </Form>
  );
};

export default reduxForm({
  form: 'login'
})(LoginForm);
