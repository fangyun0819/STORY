import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BackgroundImage from 'react-background-image-loader';
import background from './images/p1.jpg';

require('./Theme5.css')

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
 
  
});

function FullWidthGrid(props) {
  const { classes ,source} = props;

  return (

   
        <div className={classes.root}>
        <Grid container spacing={24}>

        <Grid item xs={6}>
        <Card id="card1" className={classes.card}>
        <CardContent>
          <Typography component="p">
            照片放置區
          </Typography>
         </CardContent>
        </Card> 
        </Grid>  
        </Grid> 
        <img id="img1" src={background}/>
        </div>
    
      
    
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
