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
  paper1: {
    height:'200px',
    width:'300px',
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper2: {
    height:'200px',
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function FullWidthGrid(props) {
  const { classes ,source} = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper1}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper2}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper2}>xs=6</Paper>
        </Grid>
        
      </Grid>
    </div>
    
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
