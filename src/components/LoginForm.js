import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  container: {
    marginTop: 380,
    marginLeft: 725,
    //backgroundColor: '#6b6f70'
  },
  button: {
    color: '#ffffff',
    'border-color': '#ffffff',
  }
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
    const { classes, _handerRegister, _handerForgetpassword, onSubmit } = this.props;

    return (
      <div style={styles.container}>
        <Grid container spacing={24}>
          <Grid className={classes.container} container justify="center" alignItems="center" direction="column">
            <Button variant="outlined" size="large" color="primary" className={classes.button} onClick={() => _handerRegister()}>
              Register
          </Button>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="adornment-login">Email</InputLabel>
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
              <InputLabel class="loginLabel" htmlFor="adornment-password">Password</InputLabel>
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
              <Button variant="outlined" size="large" className={classes.button} onClick={() => onSubmit(this.state.username, this.state.password)}>
                Login
          </Button>
              <Button variant="outlined" size="large" className={classes.button}>
                忘記密碼
          </Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(LoginForm);