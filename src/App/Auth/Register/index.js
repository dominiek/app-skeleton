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
import { omit } from 'lodash';

import ApplyForm from './Form';
import { Form } from 'react-final-form';
import { Link } from 'react-router-dom';
import Logo from 'assets/logo.svg';
import styled from 'styled-components';
import { getToken, parseToken } from 'utils/token';

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

@inject('auth', 'routing')
@observer
export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    const token = getToken(props);
    this.state = {
      token,
      jwt: token && parseToken(token)
    };
  }
  onSubmit = (body) => {
    this.setState({ email: body.email });
    return this.props.auth
      .register(
        { ...omit(body, ['email']), token: this.state.token },
        'register'
      )
      .then((result) => {
        if (result instanceof Error) return;
        this.props.routing.push('/');
      });
  };

  render() {
    const status = this.props.auth.getStatus('register');
    const { jwt, token } = this.state;
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
              {token && (
                <div className="wrapper">
                  <h2>Complete your account</h2>
                  {status.error && (
                    <Message error content={status.error.message} />
                  )}
                  <Form
                    initialValues={{ email: jwt.email }}
                    onSubmit={this.onSubmit}
                    render={ApplyForm}
                  />
                </div>
              )}
              {(!token || !jwt) && (
                <div className="wrapper">
                  <h2>Complete your account</h2>
                  <Message error size="huge">
                    <Message.Header>No valid token found</Message.Header>
                    <Message.Content>
                      Please ensure you either click the email link in the email
                      <br />
                      or copy paste the link in full.
                    </Message.Content>
                  </Message>
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
