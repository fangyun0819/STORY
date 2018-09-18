import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import s1 from './stickers/datasheet_addSticker_row0_image.png';
import s2 from './stickers/datasheet_addSticker_row1_image.png';
import s3 from './stickers/datasheet_addSticker_row2_image.png';
import s4 from './stickers/datasheet_addSticker_row3_image.png';
import s5 from './stickers/datasheet_addSticker_row4_image.png';
import s6 from './stickers/datasheet_addSticker_row5_image.png';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  img:{
    marginTop: theme.spacing.unit * 3,
  },
});


function FullWidthGrid(props) {
  const { classes } = props;

  return (
  <div className={classes.root}>
  <Grid container spacing={24}>
  
    
    <img className={classes.img} src={s1} width="100" height="100"/>
    <img className={classes.img} src={s2} width="100" height="100"/>
    <img className={classes.img} src={s3} width="100" height="100"/>
    <img className={classes.img} src={s4} width="100" height="100"/>
    <img className={classes.img} src={s5} width="100" height="100"/>
    <img className={classes.img} src={s6} width="100" height="100"/>
   
  </Grid>
</div>

);
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);