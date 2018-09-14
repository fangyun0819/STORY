import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import story from './images/b1.jpg';

const styles = theme => ({

  card: {
    display: 'auto',
    height: 200,
    width: 200,
  },
  button: {
    marginTop: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,

  },
 img:{
  height: 100,
  width: 120,
 },
});

class ThemeList extends React.Component {
 
  render() {
  const { classes } = this.props;


  return (
      <Grid item container xs={24}>
        <Grid item xs={6} sm={3}>
        <Card className={classes.card}>
         <CardContent>
         <Typography align="center" >
          畢業風1
          </Typography>
          <img className={classes.img} src={story} />
          <Button variant="outlined" color="primary" align="center" className={classes.button}>
          預覽
          </Button>
         </CardContent>
        </Card>
        </Grid>
       </Grid>
     );
   }
}
ThemeList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ThemeList);      