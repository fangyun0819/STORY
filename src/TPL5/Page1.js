import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BackgroundImage from 'react-background-image-loader';
import background from './images/p1.jpg';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height:'500',
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function FullWidthGrid(props) {
  const { classes ,source} = props;

  return (
    <React.Fragment>
    <CssBaseline />
        
        <BackgroundImage src={source} placeholder={background}>
        <div className={classes.root} id="layout" >
        
        <Paper  className={classes.paper}  >
        <img className={classes.img} src={background} /></Paper>
        </div>
        </BackgroundImage>
       </React.Fragment>
      
    
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
