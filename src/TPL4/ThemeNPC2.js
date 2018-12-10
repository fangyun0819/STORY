import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Page2 from './Pages/Page2';
import FontCover from './FontCover';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Page.1',
  },
  {
    label: 'Page.2',
  },
  {
    label: 'Page.3',
  },
  {
    label: 'Page.4',
  },
  {
    label: 'Page.5',
  },
];

const styles = theme => ({
  root: {
    maxWidth: '900px',
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: '50',
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
  },
  paper:{
    padding: theme.spacing.unit * 2,
    height: '500px',
    width: '900px',
  },
 
});

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0,
  };
  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };


  getStepContent(step) {
    switch (step) {
      case 0:
        return <FontCover/>;
      case 1:
        return <Page2/>;
      case 2:
        return <Page2/>;
      case 3:
        return <Page2/>;
      case 4:
        return <Page2/>;
    
    }
  }

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;

    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography >{tutorialSteps[activeStep].label}</Typography>
        </Paper>
       
        <Paper className={classes.paper}>
        {this.getStepContent(activeStep)}
        </Paper>
       
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SwipeableTextMobileStepper);
