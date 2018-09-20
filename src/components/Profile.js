import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },

});


//個人帳戶

class Profile extends Component {
  
  //  const { Profile } = props;
   /* return (
      <div className={Profile.row}>
        <Avatar alt="members" src="https://i.imgur.com/JbUZQho.jpg" className={classes.avatar} /> 
      </div>
    );
  */
 // }
 constructor(){
   super();
   this.state= {
     username: 'vivi',
     email: 'vivi@gmail.com'
   }
 }
 handleChange = name => event => {
  this.setState({
    [name]: event.target.value,
  });
};


 render(){
  return (
    <div>
      <Paper>
      <Typography variant="title" gutterBottom>
        個人帳戶設定
      </Typography>
      <Grid container spacing={24}>
      <Grid item xs={12} sm={12}>
        <Avatar alt="members" src="https://i.imgur.com/pckzHQt.jpg" />
      </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            
            id="firstName"
            name="firstName"
            label="名稱"
            value={this.state.username}
            onChange={this.handleChange('username')}
            
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="description"
            name="description"
            label="email"
            value={this.state.email}
            onChange={this.handleChange('email')}

            
          />
          </Grid>
          <Grid item xs={12} sm={12}>
          <TextField
            required
            id="description"
            name="description"
            label="原密碼"
            
          />
          </Grid>
      <Grid item xs={12} sm={12}>
          <TextField
            required
            id="description"
            name="description"
            label="新密碼"
            
          />
          </Grid>
      </Grid>
      <br/>
      <Grid item xs={6} sm={6}>
      <br/>
      </Grid>
      <Grid item xs={6} sm={6}>
        <Button variant="outlined" size="large">
          確定
        </Button>
      </Grid>
      </Paper>
      </div>
  );

 }
}

export default Profile;