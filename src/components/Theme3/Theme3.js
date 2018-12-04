import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import CoverPhoto from '../../TPL3/images/CoverPhoto.jpg';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ThemeNPC from '../../TPL3/ThemeNPC';

import start from '../../TPL3/Component1';



const styles = theme => ({

  card: {
    marginTop: theme.spacing.unit*3,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    display: 'auto',
    height: 250,
    width: 240,
  },
  button: {
    marginTop: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,

  },
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
 paper: {
  padding: theme.spacing.unit * 2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
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

  render() {
  const { classes } = this.props;


  return (
     
        <Card className={classes.card}>
         <CardContent align="center">
          <FormControlLabel
          className={classes.form}
            align="center"
            control={<Checkbox color="secondary"  value="yes" />}
            label="愛心風"
          />
          <img className={classes.img} src={CoverPhoto} />
          
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
          <DialogTitle align="center">{"主題2"}</DialogTitle>
          <DialogContent>
          <Grid container spacing={24}> 
        
         <ThemeNPC/>
          
         
          </Grid>
           </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
             CLOSE
            </Button>
          </DialogActions>
          </Dialog>


         </CardContent>
        </Card>
        
     );
   }
}
ThemeList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ThemeList);      