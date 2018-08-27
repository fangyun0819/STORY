import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';





const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    display: 'auto',
    height: 200,
    width: 200,
  },
  button: {
    marginTop: theme.spacing.unit,
  },
  paper: {
    color: theme.palette.text.secondary,
    height: 500,
    width: 500,
  },
});

class EditList extends React.Component {
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
      <Grid item container xs={24}>
        
        <Grid item xs={6} sm={3}>
        <Card className={classes.card}>
         <CardContent>
           
          <Button onClick={this.handleClickOpen} variant="outlined" color="primary" className={classes.button}>
          畢業紀念冊1
          </Button>
          <Dialog
           fullWidth
           open={this.state.open}
           onClose={this.handleClose}
          >
          <DialogTitle>{"畢業紀念冊1"}</DialogTitle>
          <DialogContent>
          

          </DialogContent>
          <DialogActions>
            
            <Button onClick={this.handleClose} color="primary" autoFocus>
              關閉
            </Button>
          </DialogActions>
          </Dialog>
           
         </CardContent>
        </Card>
        </Grid>
       </Grid>
     );
   }
}
EditList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditList);      