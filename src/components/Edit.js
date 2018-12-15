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


import { Document, Page } from 'react-pdf';
//needs to disallow cross origin
import PhotoLayoutEditor from 'react-photo-layout-editor';



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
  constructor(){
    super();
    localStorage.setItem('currentBookId', '');
  }
  state = {
    open: false,
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
      return <Redirect to='/edit/photo-layout-editor/edit.html' />
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
    <div>
      <iframe src={'http://localhost:3000/edit/photo-layout-editor/edit.html'} height='500' width="100%" />   
    </div>
     );
   }
}
Edit.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Edit);      