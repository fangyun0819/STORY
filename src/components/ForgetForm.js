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
    marginTop: 200,
    //backgroundColor: '#00B1E1'
  },
  container: {
    marginTop: 380,
    marginLeft: 725,
    //backgroundColor: '#6b6f70'
  },
  button: {
    color: '#ffffff',
    'border-color':'#ffffff',
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

class RegisterForm extends React.Component {
  state = {
    username: '',
    password: '',
    name: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    //alert(event.target.value)
  };

  render() {
    const { classes, _handleLogin, onSubmit } = this.props;

    return (
    <div style={styles.container}>
      <Grid container spacing={24}>
        <Grid className={classes.container} container justify = "center" alignItems="center"   direction="column">
          <FormControl className={classes.margin}>
            <InputLabel classes={{root:classes.label }} htmlFor="adornment-login">請輸入你的Email</InputLabel>
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
          <br/>
          <Button variant="outlined" size="large" className={classes.button}  onClick= { () => alert("驗證信已寄出")}>
              Confirm
          </Button>
          <br/>
          <Button variant="outlined" size="large" className={classes.button} onClick= { () => _handleLogin()}>
              Login
          </Button>
          </Grid>
      </Grid>
    </div>
    )
  }
}

export default withStyles(styles)(RegisterForm);