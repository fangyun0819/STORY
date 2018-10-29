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

function getSteps(){
  return ['基本資訊', '成員選擇', '模式選擇','主題選擇'];
}

//步驟設定


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

  getStepContent(step) {
    switch (step) {
      case 0:
        return <Info handleChange={(data) => {
          //console.log(data);
          this.setState({ bookName: data})
        }}/>;
      case 1:
        return <NewMember bookName={this.state.bookName} bookId={this.state.bookId} handleChange={(data) => {
        this.setState({ members: data})
        //console.log(data);
      }}/>;
      case 2:
        return <Mode/>;
      case 3:
        return <Theme/>;
      default:
        throw new Error('Unknown step');
    }
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

  handleClose = () =>{
    this.setState({ open: false });
  };

  handleNext = () => {
    const { activeStep } = this.state;
    
    try{
      const token = localStorage.getItem('token').split(": ")[1];
      this.setState({token});
      if( activeStep === 0){
        axios.post('/rest/newMemoryProject', {
          "loginToken": token,
          "memoryProjectName": this.state.bookName
        }).then((res) => {
          localStorage.setItem('currentBookId', res.data);
          this.setState({bookId: res.data});
        })
      }else if( activeStep === 1){
        axios.post('/rest/newMember', {
          "loginToken": token,
          "members": this.state.members
        })
      }
  
    }catch(err){
      
    }
    this.setState({
      activeStep: activeStep + 1,
    });
  };


  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };
  handleStep = step => () => {
    this.setState({
      activeStep: step,
    });
  };
  
  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };
  
  render() {
    const { classes ,source} = this.props;
    const { activeStep } = this.state;
    const steps = getSteps();

    return (
     
      <React.Fragment>
        <CssBaseline />
        <BackgroundImage src={source} placeholder={background} id="img">
        <div className={classes.layout} id="layout" >
       
      
          <Paper  className={classes.root}  >
          <Typography id="font"  align="center" >
            創建屬於你們的故事
          </Typography>
            <Stepper  
           activeStep={activeStep}  
           className={classes.stepper}>
            
            {steps.map(label => (
                <Step key={label} >
                  <StepLabel >{label}</StepLabel>
                </Step>
              ))}

            </Stepper>

            <Divider/>

            <Paper className={classes.paper} id="paper" >
            <React.Fragment>
            
              {activeStep === steps.length ? (
                <React.Fragment>
              <div>
              <Paper className={classes.root} elevation={1}>
              <Typography variant="headline" component="h3">
               說明
              </Typography>
              <Typography component="p">
                已成功邀請朋友加入

              </Typography>
            </Paper>
           </div>
               
                <div className={classes.buttons}>
                  <Button 
                    required
                    id="back"
                    onClick={this.handleBack} 
                    className={classes.button}>
                    返回
                    </Button>
                    <Button
                     required
                     id="next"
                     className={classes.button}
                     onClick={ ()=> this.setState({isRedirect: 1})}>
                     完成
                    </Button>
                    {this.renderRedirect()}
                    </div>

                </React.Fragment>
              ) : (
                <React.Fragment>
                  {this.getStepContent(activeStep)}
                  
                  <div className={classes.buttons}>
                    
                    {activeStep !== 0 && (
                      <Button 
                      required
                      id="back"
                      onClick={this.handleBack} 
                      className={classes.button}>
                      返回
                      </Button>
                    )}
                      <Button
                      required
                      id="next"
                      onClick={this.handleNext}
                      className={classes.button}>
                     下一步
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
            </Paper>
            
          </Paper>
          
        </div>
        </BackgroundImage>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(AddAlbumList);