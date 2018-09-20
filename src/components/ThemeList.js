import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
<<<<<<< HEAD
import Typography from '@material-ui/core/Typography';

import story from './images/b1.jpg';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Theme1 from './Theme1';
import Theme2 from './Theme2';
=======
>>>>>>> 4ea69ab0408ab35033e6961373c44f0c8c1450da


const styles = theme => ({

  card: {
<<<<<<< HEAD
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    display: 'auto',
    height: 250,
    width: 250,
=======
    display: 'auto',
    height: 200,
    width: 200,
>>>>>>> 4ea69ab0408ab35033e6961373c44f0c8c1450da
  },
  button: {
    marginTop: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,

  },
<<<<<<< HEAD
 img:{
  marginLeft: theme.spacing.unit * 3,
  marginRight: theme.spacing.unit * 3,
  height: 100,
  width: 120,
 },
 form:{
  marginLeft: theme.spacing.unit * 3,
  marginRight: theme.spacing.unit * 3,
 },
});

class ThemeList extends React.Component {
  state = {
    open: false,
  };
  handleClickOpen = () =>{
    this.setState({ open: true });
  };

  handleClose = () =>{
    this.setState({ open: false });
  };

=======
 
});

class ThemeList extends React.Component {
 
>>>>>>> 4ea69ab0408ab35033e6961373c44f0c8c1450da
  render() {
  const { classes } = this.props;


  return (
<<<<<<< HEAD
     
        <Card className={classes.card}>
         <CardContent>
          <FormControlLabel
          className={classes.form}
            align="center"
            control={<Checkbox color="secondary"  value="yes" />}
            label="畢業風1"
          />
          <img className={classes.img} src={story} />
          
          <Button 
          onClick={this.handleClickOpen}
          variant="outlined" color="primary" align="center" 
          className={classes.button}>
          預覽
          </Button>
          <Dialog
          fullScreen
           open={this.state.open}
           onClose={this.handleClose}
          >
          <DialogTitle>{"學校風主題"}</DialogTitle>
           <Theme2/>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
             CLOSE
            </Button>
          </DialogActions>
          </Dialog>


         </CardContent>
        </Card>
        
=======
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
>>>>>>> 4ea69ab0408ab35033e6961373c44f0c8c1450da
     );
   }
}
ThemeList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ThemeList);      