import React from 'react';
import FormInput from 'components/FormInput';
import { Field } from 'react-final-form';
import { Form, Input, Button } from 'semantic-ui-react';
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
          validate={email}
        />
      </Form.Field>
      <Button
        fluid
        primary
        size="large"
        content="Request password"
        loading={submitting}
        onClick={() => this.onSubmit()}
      />
    </Form>
  );
};
