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
import Theme1 from './Theme1';
import Theme2 from './Theme2';

import { Redirect } from 'react-router-dom';
import { Route,Router } from 'react-router-dom';
import Edit from './Edit';

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
  button: {
    marginTop: theme.spacing.unit,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  },
  papers: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 500,
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
  },
  
});

class EditList extends React.Component {
  state = {
    open: false,
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/allAlbums' />
    }
  }

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
        <Paper  className={classes.paper}  >
        
         <Typography align="center" >
          畢業紀念冊1
          </Typography>
          <Button 
          onClick={this.handleClickOpen} 
          variant="outlined" color="primary" 
          className={classes.button}>
          預覽畢業紀念冊
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
          </Paper>

          <React.Fragment>
          <Typography variant="headline" gutterBottom>
                
            {this.renderRedirect()}
            <Button 
            className={classes.button} 
            onClick={this.setRedirect}
            variant="outlined" 
            color="primary">
            HOMEPAGE</Button>
            </Typography>
          </React.Fragment>
        </Grid>
       </Grid>
     
     );
   }
}
EditList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditList);      