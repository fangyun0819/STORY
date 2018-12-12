import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Facebook from './Facebook';
import google from './google';


const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  container: {
    marginTop: 60,
    marginLeft: 0,
    //backgroundColor: '#6b6f70'
  },
  button: {
    color: '#ffffff',
    'border-color': '#ffffff',
  },
  button1: {
    color: '#ffffff',
    'border-color': '#ffffff',
    backgroundColor: '#ac999d'
  },
  button2: {
    
    color: '#ffffff',
    'border-color': '#ffffff',
    backgroundColor: '#b38b94'
  },
  label: {
    fontSize: '10px',
    color: '#9d9795',
    '&:focus':{
      fontSize: '10px',
      color: '#9d9795',
    }
  },
 
});

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    //alert(event.target.value)
  };

  render() {
    const { classes, _handerRegister, _handleForget, password, onSubmit } = this.props;

    return (
      <div style={styles.container}>
       <br/> <br/> <br/> <br/> <br/> <br/> <br/>
       
        <Grid container spacing={24}>
          <Grid className={classes.container} container justify="center" alignItems="center" direction="column">
            <Button variant="outlined" size="large"  color="primary" className={classes.button} onClick={() => _handerRegister()}>
              去註冊
          </Button>
            <FormControl className={classes.margin}>
              <InputLabel classes={{root:classes.label }} htmlFor="adornment-login" classes={{root:classes.label }}>會員信箱帳號</InputLabel>
              <Input
                id="adornment-login"
                type={'text'}
                value={this.state.username}
                onChange={this.handleChange('username')}
                endAdornment={
                  <InputAdornment position="end">

                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl className={classes.margin}>
              <InputLabel classes={{root:classes.label }} htmlFor="adornment-password" classes={{root:classes.label }}>會員密碼</InputLabel>
              <Input
                id="adornment-password"
                class="loginInput"
                type={'password'}
                value={this.state.password}
                onChange={this.handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">

                  </InputAdornment>
                }
              />
            </FormControl>
            <br/>
            
          
              <Button variant="outlined" size="large" className={classes.button2} onClick={() => {
                onSubmit(this.state.username, this.state.password);
                //console.log(this.state.username)
                }}>
                確認登入
          </Button>
          <br/>
              <Button variant="outlined" size="middle" className={classes.button1} onClick={() => _handleForget()}>
                忘記密碼
          </Button>

          
          
          </Grid>
        </Grid>
        <br/>
        <br/>
        <br/> <br/>
        <Facebook/>
        <br/>
       <google/>

      </div>

    )
  }
}

export default withStyles(styles)(LoginForm);