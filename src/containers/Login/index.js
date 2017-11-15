import React from 'react';
import { Grid, Header, Image, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Form from './Form';
import { getStatus, login } from 'modules/authenticate';
import Logo from 'assets/logo.png';

class LoginContainer extends React.Component {
  handleSubmit = (values) => {
    this.props.login(values);
  }
  render() {
    const status = this.props.status;
    return (
      <div style={{ height: '100%' }} className="login-form">
        <Grid
          style={{ height: '100%' }}
          centered
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" textAlign="center">
              <Image src={Logo} />
              {' '}Log-in to your account
            </Header>
            { status.type === 'failure' &&
              <Message negative>
                <Message.Header>Oops that didnt work</Message.Header>
                <p>{status.error.message}</p>
              </Message>
            }
            <Form
              onSubmit={this.handleSubmit}
              className="medium-6"
              submitting={status.type === 'request'}
            />
            <Message>
              New to us? <a href="#">Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  status: getStatus(state, 'login')
});

const mapDispatchToProps = {
  login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
