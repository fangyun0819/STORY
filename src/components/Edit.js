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

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Theme1 from './Theme1';

require('./components.css');

const styles = theme => ({
  root: {
    flexGrow: 1,
   
  },
  card: {
    display: 'auto',
    height: 200,
    width: 200,
  },

  papers: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    height: 400,
   
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
        
        <Grid item xs={12}>
        
          <Button 
          id="position" 
          onClick={this.handleClickOpen} 
          color="primary" 
          align= "center"
        >
          預覽
          </Button>
          
          <Dialog
          fullScreen
           open={this.state.open}
           onClose={this.handleClose}
          >
          <DialogTitle>{"畢業紀念冊1"}</DialogTitle>
         <Theme1/>

          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
             CLOSE
            </Button>
          </DialogActions>
          </Dialog>
        

        </Grid>
        <Grid item item xs={2}>
        <Paper  className={classes.papers}  >
        <Typography>
          新增文字
         </Typography> 

        </Paper>
        </Grid>
        <Grid item item xs >
        <Paper  className={classes.papers}  >
        </Paper>
        </Grid>
        <Grid item item xs >
        <Paper  className={classes.papers}  >
        </Paper>
        </Grid>
       </Grid>
     );
   }
}
EditList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditList);      