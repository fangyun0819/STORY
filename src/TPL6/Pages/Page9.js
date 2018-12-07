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
import background from '../images/p9.jpg';

require('../../css/Theme.css')

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

function FullWidthGrid(props) {
  const { classes ,source} = props;

  return (
    <BackgroundImage src={background} id="page2">
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Card id="card9-1" >
        <CardContent>
          <Typography >
            照片放置區
          </Typography>
         </CardContent>
        </Card> 
        <Card id="card9-2" >
        <CardContent>
          <Typography>
            照片放置區
          </Typography>
         </CardContent>
        </Card> 
      </Grid>
      
    </div>
    </BackgroundImage>
    
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
