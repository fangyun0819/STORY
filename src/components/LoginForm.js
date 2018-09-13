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
  },
  label: {
    fontSize: '10px',
    color: '#c1c1c2',
    '&:focus':{
      fontSize: '10px',
      color: '#c1c1c2',
    }
  },
});

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  };
//把全部值改掉
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes, _handerRegister, _handleForget, password, onSubmit } = this.props;

    return (
      <div style={styles.container}>
        <Grid container spacing={24}>
          <Grid className={classes.container} container justify="center" alignItems="center" direction="column">
            <Button variant="outlined" size="large" color="primary" className={classes.button} onClick={() => _handerRegister()}>
              Register
          </Button>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="adornment-login" classes={{root:classes.label }}>Email</InputLabel>
              <Input
                id="adornment-login"
                type={'text'}
                value={this.state.username}
                onChange={this.handleChange('username')}

              />
            </FormControl>
            <FormControl className={classes.margin}>
              <InputLabel classes={{root:classes.label }} htmlFor="adornment-password">Password</InputLabel>
              <Input
                id="adornment-password"
                type={'password'}
                value={this.state.password}
                onChange={this.handleChange('password')}
                
              />
            </FormControl>
              <Button variant="outlined" size="large" className={classes.button} onClick={() => onSubmit(this.state.username, this.state.password)}>
                Login
          </Button>
          <br/>
          <Button variant="outlined" size="large" className={classes.button} onClick={() => _handleForget()}>
                忘記密碼     
          </Button>
          <br/>  
          
          <Button variant="contained" color="secondary" size="large"  >
            Google
          </Button>
          <br/> 
          <Button variant="contained" color="primary" size="large"  >
            Facebook
          </Button>
          </Grid>
          </Grid>
        
      </div>
      
    )
  }
}

export default withStyles(styles)(LoginForm);