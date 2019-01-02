import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Avatar from 'react-avatar-edit';

const emails = ['vinetacles@gmail.com','kon70209@yahoo.com.tw'];
const styles = theme => ({

  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
 
});


class Info extends React.Component {
  

  constructor(props){
    super(props);
    const src = './example/https://i.imgur.com/J0AQ8cG.png'
    this.state= {
      username: 'lulu',
      email: 'lulumi527@gmail.com',
      preview: "https://i.imgur.com/pckzHQt.jpg",
      isConfirmed: false
    }
    this.onCrop = this.onCrop.bind(this)
    this.onClose = this.onClose.bind(this)
   }
  
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  
    
  onClose() {
    //this.setState({preview: null})
  }
  
  onCrop(preview) {
    this.setState({preview})
   }
  



  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;
 
    return (
  
    <React.Fragment>
     <main className={classes.layout}>
     <Paper className={classes.paper}>
      <Grid container spacing={24} >
      <Typography id="text" align="center">
      個人帳戶設定
      </Typography>
      <Grid item xs={12} sm={12}></Grid>
      <Grid item xs={3}>
        {
            (this.state.isConfirmed? null : <Avatar
              width={390}
              height={295}
              onCrop={this.onCrop}
              onClose={this.onClose}
              src={this.state.src}
          />)
        }
        {
          (this.state.isConfirmed? <img width={100}
            height={100} src={this.state.preview} alt="Preview" /> : null)
        }
          <Button variant="outlined" size="large" onClick={ () => {
            let {isConfirmed} = this.state;
            isConfirmed = !isConfirmed;
            this.setState({isConfirmed});
          }}>
          {
            (this.state.isConfirmed) ? "更改" : "確定"
          }
          </Button>
        </Grid>
      <Grid item xs={12} sm={12}>
          <TextField
            required
            id="firstName"
              name="firstName"
              label="會員名稱"
            fullWidth
          /> 
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="description"
              name="description"
              label="會員信箱"
            fullWidth
          /> 
        </Grid>
        <Grid item xs={12} sm={12}>
            <TextField
              required
              id="description"
              name="description"
              label="會員原密碼"
              fullWidth
            />
            </Grid>
        <Grid item xs={12} sm={12}>
            <TextField
              required
              id="description"
              name="description"
              label="會員新密碼"
              fullWidth
            />
            </Grid>
        <Button variant="outlined" size="large">
          確定
        </Button>
        </Grid>
        </Paper>
      </main >
    </React.Fragment>
  );

} 
}
export default withStyles(styles)(Info);