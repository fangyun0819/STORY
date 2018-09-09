import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ThemeList from './ThemeList';
import Button from '@material-ui/core/Button';

require('./components.css');

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    height: 'auto',
  },

 
});

class Theme extends React.Component {
  constructor(){
    super();

    this.state = {
       black: true
    }
}

changeColor(){
   this.setState({black: !this.state.black})
}

 
  render() {
    const { classes } = this.props;
  return (
    <div>
      <React.Fragment>
      <Paper className={classes.root} elevation={1}>
       <ThemeList/>
       <Button id="button" variant="outlined" color="primary">
        確定套用</Button>
      </Paper>
    </React.Fragment>
    
    </div>
  );
}
}
Theme.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Theme); 