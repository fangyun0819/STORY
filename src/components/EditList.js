import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Info from './components/Info';
import NewMember from './components/NewMember';
import OrganizePhoto from './components/OrganizePhoto';
import ImageUpload from './components/ImageUpload';
import Theme from './components/Theme';

import { Redirect } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

import LinearProgress from '@material-ui/core/LinearProgress';
import MobileStepper from '@material-ui/core/MobileStepper';
import Avatar from '@material-ui/core/Avatar';

import BackgroundImage from 'react-background-image-loader';

import background from './images/bg1.jpg';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Edit from './components/Edit';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ThemePC from './reactStudio/ThemePC';
import axios from 'axios';
import Mode from './components/Mode';



require('./css/style.css');


//樣式設定
const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 6,
    marginRight: theme.spacing.unit * 6,
    width: 900,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  root:{
    alignItems: 'center',
    marginTop: theme.spacing.unit * 6,
    marginBottom: theme.spacing.unit * 6,
    padding: theme.spacing.unit * 6,
    [theme.breakpoints.up(600 + theme.spacing.unit * 6 * 6)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
    
  },
 
  paper: {
    marginTop: theme.spacing.unit * 6,
    marginBottom: theme.spacing.unit * 6,
    padding: theme.spacing.unit * 6,
    [theme.breakpoints.up(600 + theme.spacing.unit * 6 * 6)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },//按鈕位直
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});




//點選按鈕設定
class AddAlbumList extends React.Component {
  state = {
    activeStep: 0,
    completed: new Set(),
    skipped: new Set(),
    redirect: false
  };
  
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  

  
  renderRedirect = () => {
    if(this.state.isRedirect === 0){

    }else if(this.state.isRedirect === 1){
      return <Redirect to={`/showalbumlist`}/>
    }else if(this.state.isRedirect === 2){
      return <Redirect to={`/editlist`}/>
    }
  }
  
  handleClickOpen = () =>{
    this.setState({ open: true });
  };

  


  
  
  render() {
    const { classes ,source} = this.props;
   

    return (
    
            <Paper className={classes.paper} id="paper" >
            <React.Fragment>
            
            
              <div>
              <Paper className={classes.root} elevation={1}>
              <Typography variant="headline" component="h3">
               說明
              </Typography>
              <Typography component="p">
                想要編輯者請選擇進入編輯區，否則選擇完成
              </Typography>
            </Paper>
           </div>
                <Button 
                onClick={this.handleClickOpen}
                 className={classes.button} 
                 variant="outlined" 
                 color="primary">
                 預覽我的電子紀念冊
                 </Button>
                  
                 <Dialog
                fullScreen
                open={this.state.open}
                onClose={this.handleClose}
                >
              <DialogTitle align="center">{"畢業紀念冊1"}</DialogTitle>
              <DialogContent>
              <Grid container spacing={24}> 
              <Grid item xs>
              </Grid>
              <Grid item xs={6}>
              <ThemePC/>
              </Grid>
              <Grid item xs>
              </Grid>
              </Grid>
              </DialogContent>
               <DialogActions>
              <Button onClick={this.handleClose} color="primary" autoFocus>
              CLOSE
              </Button>
            </DialogActions>
           </Dialog>

                  
                {this.renderRedirect()}
               
                <Button 
                 className={classes.button} 
                 onClick={ ()=> this.setState({isRedirect: 2})}
                 variant="outlined" 
                 color="primary">
                進入編輯頁面</Button>
           
                </React.Fragment>
                </Paper>
    );
  }
}

export default withStyles(styles)(AddAlbumList);