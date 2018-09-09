import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 6,
    marginRight: theme.spacing.unit * 6,
    width: 1000,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 50,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },

});


//個人帳戶

function Profile() {
  
  //  const { Profile } = props;
   /* return (
      <div className={Profile.row}>
        <Avatar alt="members" src="https://i.imgur.com/JbUZQho.jpg" className={classes.avatar} /> 
      </div>
    );
  */
 // }
 
  return (
    <div>
      <Paper>
      <Typography variant="title" gutterBottom>
        個人帳戶設定
      </Typography>
      <Grid container spacing={24}>
      <Grid item xs={12} sm={6}>
          </Grid>
      <Avatar alt="members" src="https://i.imgur.com/pckzHQt.jpg" />
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="名稱"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          </Grid>
       
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="description"
            name="description"
            label="email"
            fullWidth
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            id="description"
            name="description"
            label="帳號"
            fullWidth
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            id="description"
            name="description"
            label="密碼"
            fullWidth
          />
          </Grid>
      </Grid>
      </Paper>
      </div>
    
    
  );
}

export default Profile;