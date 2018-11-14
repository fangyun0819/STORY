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

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
 
  paper: {
    height:'600px',
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
   height: '300px',
   width: '400px',
   marginLeft: theme.spacing.unit * 1,
   marginRight: theme.spacing.unit * 1,
  },

});

function FullWidthGrid(props) {
  const { classes ,source} = props;

  return (
  
        <div className={classes.root}>
        <Grid container spacing={24}>

        <Grid item xs={6} className={classes.grid}>
        <Card className={classes.card}>
         <CardContent>
          <Typography component="p">
            照片放置區
          </Typography>
         </CardContent>
        </Card>
        </Grid>

        <Grid item xs={6}>
          <Card className={classes.card}>
         <CardContent>
          <Typography component="p">
            照片放置區
          </Typography>
         </CardContent>
        </Card> 
        </Grid>  
        </Grid>

        <Paper  classNam={classes.paper}  >
        <img className={classes.img} src={background} />
        </Paper>
        </div>
   
      
    
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
