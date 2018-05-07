import React from 'react';
import {
  Segment,
  Message,
  Grid,
  Image,
  Header,
  Container
} from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';

import ApplyForm from './Form';
import { Form } from 'react-final-form';
import { Link } from 'react-router-dom';
import Logo from 'assets/logo.svg';
import styled from 'styled-components';

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-around;
  height: 100%;
  .header {
    flex: 0;
    margin: 1em;
  }
  .content {
    display: flex;
    flex: 1;
    align-items: center;
    .wrapper {
      width: 100%;
      margin: 4em;
    }
    h2 {
      font-size: 3em;
    }
  }
`;

@inject('auth')
@observer
export default class Signup extends React.Component {
  onSubmit = (body) => {
    this.setState({ email: body.email });
    return this.props.auth.apply(body, 'apply');
  };

  render() {
    const status = this.props.auth.getStatus('apply');
    return (
      <Grid style={{ height: '100vh' }}>
        <Grid.Column width={6}>
          <CenterContainer>
            <div className="header">
              <Link to="/">
                <Image src={Logo} alt="Logo" style={{ height: '80px' }} />
              </Link>
            </div>
            <div className="content">
              {status.success ? (
                <div className="wrapper">
                  <Message info size="huge">
                    <Message.Header>Check your email!</Message.Header>
                    <p>
                      We’ve sent a confirmation email to{' '}
                      <b>{this.state.email}</b>.
                      <br />
                      It will expire after 24 hours, so activate it soon.
                    </p>
                  </Message>
                </div>
              ) : (
                <div className="wrapper">
                  <h2>Create your account</h2>
                  {status.error && (
                    <Message error content={status.error.message} />
                  )}
                  <Form onSubmit={this.onSubmit} render={ApplyForm} />
                </div>
              )}
            </div>
          </CenterContainer>
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: '1em 0em', height: '100vh' }}
            vertical
          >
            <Container text>
              <Header
                as="h1"
                content="Imagine-a-Company"
                inverted
                style={{
                  fontSize: '4em',
                  fontWeight: 'normal',
                  marginBottom: 0,
                  marginTop: '3em'
                }}
              />
              <Header
                as="h2"
                content="Do whatever you want when you want to."
                inverted
                style={{
                  fontSize: '1.7em',
                  fontWeight: 'normal',
                  marginTop: '1.5em'
                }}
              />
            </Container>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
