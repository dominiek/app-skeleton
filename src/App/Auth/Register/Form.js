import React from 'react';
import FormInput from 'components/FormInput';
import FormCheckbox from 'components/FormCheckbox';
import { Field } from 'react-final-form';
import { Form, Button, Input, Checkbox } from 'semantic-ui-react';
import { password, required } from 'utils/validate';

export default (props) => {
  const { handleSubmit, submitting } = props;
  return (
    <Form size="large" onSubmit={handleSubmit}>
      <Form.Field>
        <Field
          component={FormInput}
          as={Input}
          readOnly
          name="email"
          icon="mail"
          autoComplete="email"
          iconPosition="left"
          type="text"
        />
      </Form.Field>
      <Form.Field>
        <Field
          component={FormInput}
          as={Input}
          name="name"
          autoComplete="name"
          icon="id card outline"
          iconPosition="left"
          placeholder="Name"
          type="text"
          validate={required}
        />
      </Form.Field>
      <Form.Field>
        <Field
          component={FormInput}
          as={Input}
          autoComplete="new-password"
          name="password"
          iconPosition="left"
          placeholder="Password"
          icon="lock"
          type="password"
          validate={password}
        />
      </Form.Field>
      <Form.Field>
        <label>
          <Field
            component={FormCheckbox}
            as={Checkbox}
            name="termsAccepted"
            label={
              <label>
                I agree to the{' '}
                <a target="_blank" href="/terms">
                  Terms of Service
                </a>
              </label>
            }
            validate={required}
          />
        </label>
      </Form.Field>
      <Button
        fluid
        primary
        loading={submitting}
        size="large"
        content="Register"
      />
    </Form>
  );
};
