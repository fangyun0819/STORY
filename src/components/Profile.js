import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Avatar from 'react-avatar-edit'


const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 3,
  },
  paper: {
    marginTop: 300,
    marginLeft: 725,
  },

});


//個人帳戶

class Profile extends React.Component {
  
  //  const { Profile } = props;
   /* return (
      <div className={Profile.row}>
        <Avatar alt="members" src="https://i.imgur.com/JbUZQho.jpg" className={classes.avatar} /> 
      </div>
    );
  */
 // }
 constructor(props){
   super(props);
   const src = './example/https://i.imgur.com/J0AQ8cG.png'
   this.state= {
     username: 'vivi',
     email: 'vivi@gmail.com',
     preview: null,
      src
    }
    this.onCrop = this.onCrop.bind(this)
    this.onClose = this.onClose.bind(this)
  }
  
  onClose() {
    //this.setState({preview: null})
  }
  
  onCrop(preview) {
    this.setState({preview})
   }
 
 handleChange = name => event => {
  this.setState({
    [name]: event.target.value,
  });
};

  

 render(){
  return (  
    
    <div style={styles.paper}>
    <Paper>
      <br/>
      <Grid container spacing={24}>
      <Grid item xs={6}></Grid>
      <Grid item xs={6}>
      <Typography variant="title" gutterBottom>
        個人帳戶設定
      </Typography>
      </Grid></Grid>
      <Grid container spacing={24}>
      <Grid item xs={4}></Grid>
      <Grid item xs={3}>
      <Avatar
          width={390}
          height={295}
          onCrop={this.onCrop}
          onClose={this.onClose}
          src={this.state.src}
        />
        <img src={this.state.preview} alt="Preview" />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="名稱"
            value={this.state.username}
            onChange={this.handleChange('username')}
            fullWidth
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

            fullWidth
          />
          </Grid>
          <Grid item xs={12} sm={12}>
          <TextField
            required
            id="description"
            name="description"
            label="原密碼"
            fullWidth
          />
          </Grid>
      <Grid item xs={12} sm={12}>
          <TextField
            required
            id="description"
            name="description"
            label="新密碼"
            fullWidth
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
ReactDOM.render(<Profile/> , document.getElementById('root'))

