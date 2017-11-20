import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FormInput from 'components/FormInput';
import { Form, Input, Button, Checkbox } from 'semantic-ui-react';

const SignupForm = (props) => {
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
          name="username"
          icon="user"
          iconPosition="left"
          placeholder="Username"
          type="text"
        />
      </Form.Field>
      <Form.Field>
        <Field
          component={FormInput}
          as={Input}
          name="name"
          icon="id card outline"
          iconPosition="left"
          placeholder="Name"
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
      <Form.Field>
        <Field
          component={FormInput}
          as={Input}
          name="passwordRepeat"
          iconPosition="left"
          placeholder="Repeat Password"
          icon="lock"
          type="password"
        />
      </Form.Field>
      <Form.Field>
        <label>
          <Field
            component={FormInput}
            as={Checkbox}
            name="termsAccepted"
            label={(
              <label>I agree to the <a target="_blank" href="/terms">Terms of Service</a></label>
            )}
          />
        </label>
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
  form: 'signup'
})(SignupForm);
