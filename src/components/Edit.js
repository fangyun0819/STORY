import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

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
import ThemePC from '../reactStudio/ThemePC';
import { Redirect } from 'react-router-dom';

import BackgroundImage from 'react-background-image-loader';
import background from './images/background.jpg';
import p1 from './images/p1.jpg';
import p2 from './images/p2.jpg';

import Sticker from './Sticker';
import Text from './Text';

import Page1Screen from './theme/Page1Screen';


require('./components.css');

const styles = theme => ({
  root: {
    flexGrow: 1,
   
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 6,
    marginRight: theme.spacing.unit * 6,
    width: 800,
    height:500,
    marginLeft: 'auto',
    marginRight: 'auto',
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
    height:'auto',
    
  },

  img:{
    marginTop: theme.spacing.unit * 1,
  },
});

class Edit extends React.Component {
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
      return <Redirect to='/showalbumlist' />
    }
  }

  handleClickOpen = () =>{
    this.setState({ open: true });
  };

  handleClose = () =>{
    this.setState({ open: false });
  };

  render() {
    const { classes,source } = this.props;
    

  return (
      <Grid item container xs={24}>
        
        <Grid item xs={12}>
        
          <Button 
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
          <DialogTitle align="center">{"畢業紀念冊1"}</DialogTitle>
          <DialogContent>
          <Grid container spacing={24}> 
        <Grid item xs>
        </Grid>
          <Grid item xs={6}>
         <ThemePC/>
          </Grid>
          <Grid item xs>
          </Grid>
          </Grid>
           </DialogContent>

          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
             CLOSE
            </Button>
          </DialogActions>
          </Dialog> 
          {this.renderRedirect()}
          <Button 
          onClick={this.setRedirect}
          id="position" color="primary" >
          完成
          </Button>
        </Grid>

        <Grid item item xs={2}>
        <Paper  className={classes.papers}  >
        <Typography>
          新增文字
         </Typography> 
          <Text/>
        </Paper>
        <Paper  className={classes.papers}  >
        <Typography>
          新增貼圖
         </Typography> 
          <Sticker/>
        </Paper>
        </Grid>
        
      
        
        <Grid item item xs={10}>
        <div className={classes.layout} id="target-container" >
        <Page1Screen/>

        </div>
        </Grid>
       </Grid>
     
     );
   }
}
Edit.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Edit);      