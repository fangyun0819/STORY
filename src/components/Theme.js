import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ThemeList from './ThemeList';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    height: 250,
  },
 
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <React.Fragment>
      <Paper className={classes.root} elevation={1}>
       <ThemeList/>
      </Paper>
    </React.Fragment>
    
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);