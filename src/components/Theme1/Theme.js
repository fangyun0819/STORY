import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// import Theme1 from './Theme1';
// import Theme2 from './Theme2';
import Theme3 from './Theme3';
// import Theme4 from './Theme4';
import Theme5 from './Theme5';
import Theme6 from './Theme6';


require('../components.css');

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
  constructor(props){
    super(props); 
    this.state = {
        color_black: true
    }
    this.changeColor = this.changeColor.bind(this);
}

changeColor(){
    this.setState({color_black: !this.state.color_black})
}

  render() {
    const { classes } = this.props;
    let bgColor = this.state.color_black ? "primary" : "#424242"
  return (
    <div>
      <React.Fragment>
     
      <Grid container spacing={24}>

        {/* <Theme1/>
        <Theme2/> */}
        <Theme3/>
        {/* <Theme4/> */}
        <Theme5/>
        <Theme6/>

       </Grid>
    
      
    </React.Fragment>
    
    </div>
  );
}
}
Theme.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Theme); 