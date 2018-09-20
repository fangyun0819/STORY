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
import axios from 'axios';
//點註冊進去
const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  container: {
    marginTop: 200,
    //backgroundColor: '#00B1E1'
  },
  container: {
    marginTop: 60,
    marginLeft: 0,
    //backgroundColor: '#6b6f70'
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
  button: {
    color: '#ffffff',
    'border-color':'#ffffff',
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

class RegisterForm extends React.Component {
  state = {
    memberName: '',
    memberAccount: '',
    memberPassword: ''
    
  };

  handleChange = memberName => event => {
    this.setState({
      [memberName]: event.target.value
    });
    //alert(event.target.value)
  };
  handleChange = memberAccount => event => {
    this.setState({
      [memberAccount]: event.target.value
    });
    //alert(event.target.value)
  };
  handleChange = memberPassword => event => {
    this.setState({
      [memberPassword]: event.target.value
    });
    //alert(event.target.value)
  };
  handleSubmit=()=>{
    const user ={
      memberName: this.state.memberName,
      memberAccount: this.state.memberAccount,
      memberPassword: this.state.memberPassword
    };

    console.log(user)
    axios.post('http://localhost:8081/rest/register', user)
    .then(res=> {
      console.log(res);
      console.log(res.data);
    })
  };

  
      

  render() {
    const { classes, _handleLogin, onSubmit } = this.props;

    return (
    <div style={styles.container}>
      <Grid container spacing={24}>
        <Grid className={classes.container} container justify = "center" alignItems="center"   direction="column">
          <Button variant="outlined" size="large" color="primary" className={classes.button} onClick= { () => _handleLogin()}>
              去登入
          </Button>
          <FormControl className={classes.margin}>
            <InputLabel classes={{root:classes.label }} htmlFor="adornment-memberName">會員名稱</InputLabel>
              <Input
                id="adornment-memberName"
                type={'text'}
                value={this.state.memberName}
                onChange={this.handleChange('memberName')}
                endAdornment={
                  <InputAdornment position="end">

                  </InputAdornment>
                }
              />
          </FormControl>
          <FormControl className={classes.margin}>
            <InputLabel classes={{root:classes.label }} htmlFor="adornment-login">會員帳號信箱</InputLabel>
              <Input
                id="adornment-login"
                type={'text'}
                value={this.state.memberAccount}
                onChange={this.handleChange('memberAccount')}
                endAdornment={
                  <InputAdornment position="end">

                  </InputAdornment>
                }
              />
          </FormControl>
          <FormControl  className={classes.margin}>
              <InputLabel classes={{root:classes.label }} htmlFor="adornment-memberPassword">會員密碼</InputLabel>
              <Input
                id="adornment-memberPassword"
                type={'memberPassword'}
                value={this.state.memberPassword}
                onChange={this.handleChange('memberPassword')}
                endAdornment={
                  <InputAdornment position="end">

                  </InputAdornment>
                }
              />
          </FormControl>
          <Button variant="outlined" size="large" className={classes.button2} onClick= { () => {
            this.handleSubmit();
            alert("驗證信已寄出");
            }}>
              確認註冊
          </Button>
          </Grid>
      </Grid>
    </div>
    )
  }
}

export default withStyles(styles)(RegisterForm);