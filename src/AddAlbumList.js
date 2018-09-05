import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';

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
import EditList from './components/EditList';

import { Redirect } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

import LinearProgress from '@material-ui/core/LinearProgress';
import MobileStepper from '@material-ui/core/MobileStepper';


require('./css/info.css');
require('./css/style.css');


//樣式設定
const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 6,
    marginRight: theme.spacing.unit * 6,
    width: 1000,
    marginLeft: 'auto',
    marginRight: 'auto',
    
  },

  root:{
    backgroundColor:'#FFAB40',
    color: theme.palette.common.white,
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
    backgroundColor:'#FFCC80',
    color: theme.palette.common.white,
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
    backgroundColor:'#FFAB40',
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
  return ['基本資訊', '選擇成員', '選擇照片','照片匯集','主題選擇','編輯頁面'];
}

//步驟設定
function getStepContent(step) {
  switch (step) {
    case 0:
      return <Info />;
    case 1:
      return <NewMember />;
    case 2:
      return <ImageUpload />;
    case 3:
      return <OrganizePhoto />;
    case 4:
      return <Theme/>;
    case 5:
      return <EditList/>;
    default:
      throw new Error('Unknown step');
  }
}


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
    if (this.state.redirect) {
      return <Redirect to='/allAlbums' />
    }
  }
  
  handleNext = () => {
    const { activeStep } = this.state;
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

  
  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    const steps = getSteps();

    return (
     
      <React.Fragment>
        <CssBaseline />
        <main  className={classes.layout}>
          <Paper  className={classes.root}>
            <Stepper 
            activeStep={activeStep}  
            className={classes.stepper} 
            id="flex-container">
            
            {steps.map((label, index) => {
            const props = {};
            const buttonProps = {};
            return (
              <Step key={label} {...props} >
              
                <StepButton
                  id="step-number"
                  onClick={this.handleStep(index)}
                  {...buttonProps}
                >
                  {label}
                </StepButton>
              </Step>
            );
          })}

            </Stepper>

            <Divider />

            <Paper className={classes.paper} color="primary">
            <React.Fragment>
            
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="headline" gutterBottom>
                
                {this.renderRedirect()}
                <Button 
                 className={classes.button} 
                 onClick={this.setRedirect}
                 variant="outlined" 
                 color="primary">
                HOMEPAGE</Button>
                  
                  </Typography>
                  
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  
                  <div className={classes.buttons}>
                    
                    {activeStep !== 0 && (
                      <Button 
                      required
                      id="back"
                      onClick={this.handleBack} 
                      className={classes.button}>
                      BACK
                      </Button>
                    )}
                      <Button
                      required
                      id="next"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'FINISH' : 'NEXT'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
            </Paper>
          </Paper>
        </main>
      </React.Fragment>
     
    );
  }
}

export default withStyles(styles)(AddAlbumList);