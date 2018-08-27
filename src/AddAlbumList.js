import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
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
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});



const steps = ['基本資訊', '選擇成員', '選擇照片','照片匯集','主題選擇','編輯頁面'];


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

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            
            <Typography variant="display1" align="center">
              STORY BOOK
            </Typography>

            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

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
                 回到首頁</Button>
                  </Typography>
                  
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={this.handleBack} className={classes.button}>
                        上一步
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? '完成' : '下一步'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(AddAlbumList);