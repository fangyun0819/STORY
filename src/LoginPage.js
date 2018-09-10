import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from 'react-admin';
import LoginForm from './components/LoginForm.js'
import RegisterForm from './components/RegisterForm.js'
import ForgetForm from './components/ForgetForm.js'

//import Background from './40409997_346579822551613_6666760567425859584_n.png';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  container: {
    marginTop: 200,
    //backgroundColor: '#00B1E1'
  },
});
class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: 1,
      username: 'username',
      password: 'password'
    }
  }
  submit() {
    //e.preventDefault();
    // gather your data/credentials here
    const { username, password } = this.state;
    const credentials = { username: username, password: password };
    // Dispatch the userLogin action (injected by connect)
    this.props.userLogin(credentials);
  }

  _handerRegister() {
    this.setState({ isLogin: 2 })
  }

  _handleLogin() {
    this.setState({ isLogin: 1 })
  }

  _handleForget() {
    this.setState({ isLogin: 3 })
  }

  _handerUsernameChange(username) {
    this.setState(username);
  }

  _handerPasswordChange(password) {
    this.setState(password);
  }

  _renderForm() {
    if (this.state.isLogin === 1)
      return (<LoginForm
        _handerRegister={() => this._handerRegister()}
        _handleForget={() => this._handleForget()}
        onSubmit={(username, password) => this.props.userLogin({ username, password })} />)
    else if (this.state.isLogin === 2)
      return (<RegisterForm _handleLogin={() => this._handleLogin()} />)
    else if (this.state.isLogin === 3)
      return (<ForgetForm  _handleLogin={() => this._handleLogin()}/>)

  }
  render() {
    return (
      <form style={{
        top: '0', bottom: '0', left: '0', right: '0', position: 'absolute',
        backgroundImage: `url('https://i.imgur.com/qHHR7vK.jpg')`,
        backgroundPosition: 'top left',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#ffffff'
      }}>
        {this._renderForm()}
      </form>
      //背景圖https://i.imgur.com/iSE5TDe.png     
      //https://i.imgur.com/btdO8e7.png
    );
  }
};

export default connect(undefined, { userLogin })(LoginPage);