import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from 'react-admin';
import LoginForm from './components/LoginForm.js'
import RegisterForm from './components/RegisterForm.js'
import ForgetForm from './components/ForgetForm.js'
import axios from 'axios';

//import Background from './40409997_346579822551613_6666760567425859584_n.png';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  container: {
    marginTop: 100,
    //backgroundColor: '#00B1E1'
  },
});
class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: 1,
      memberAccount: 'memberAccount',
      memberPassword: 'memberPassword'
    }
  }
  submit() {
    //e.preventDefault();
    // gather your data/credentials here
    const { memberAccount, memberPassword } = this.state;
    //props父子 vs authprovider後端
    const credentials = { memberAccount: memberAccount, memberPassword: memberPassword };
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
//讓框框值變
  _handermemberAccountChange(memberAccount) {
    this.setState(memberAccount);
  }

  _handermemberPasswordChange(memberPassword) {
    this.setState(memberPassword);
  }

  _renderForm() {
    if (this.state.isLogin === 1)
      return (<LoginForm
        _handerRegister={() => this._handerRegister()}
        _handleForget={() => this._handleForget()}
        onSubmit={(memberAccount, memberPassword) => this.props.userLogin({  username: memberAccount, password: memberPassword })} />)
    else if (this.state.isLogin === 2)
      return (<RegisterForm 
        _handleLogin={() => this._handleLogin()} />)
    else if (this.state.isLogin === 3)
      return (<ForgetForm  
        _handleLogin={() => this._handleLogin()}/>)

  }
  render() {
    return (
      <form style={{
        top: '0', bottom: '0', left: '0', right: '0',height:'100vh', padding:'0 0px',
        backgroundImage: `url('https://i.imgur.com/qN0F3Ro.jpg')`,
        backgroundsize: 'cover',
        backgroundPosition: 'center',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#55333b'



      }}>


      
        {this._renderForm()}
      </form>
     
    );
  }
};

export default connect(undefined, { userLogin })(LoginPage);