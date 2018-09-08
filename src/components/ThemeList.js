import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


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
 
});

class ThemeList extends React.Component {
 
  render() {
  const { classes } = this.props;


  return (
      <Grid item container xs={24}>
        <Grid item xs={6} sm={3}>
        <Card className={classes.card}>
         <CardContent>
          <Button variant="outlined" color="primary" className={classes.button}>
          畢業風1
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