import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ThemeList from './ThemeList';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

require('./components.css');

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    height: 'auto',
  },
  button:{
  display: 'flex',
  justifyContent: 'flex-end',
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
      <Paper className={classes.root} >
      <Grid container spacing={24}>
        <Grid item xs={12}>
       <ThemeList/>
       <div className={classes.button}>
       <Button variant="outlined" color="primary" >
        確定套用</Button>
        </div>
       </Grid>
       
       </Grid>
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