import React, { Component} from 'react';
import { List, Datagrid, EmailField, TextField } from 'react-admin/lib';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import { Edit, SimpleForm, SaveButton, Toolbar } from 'react-admin';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  container: {
    marginTop: 380,
    marginLeft: 725,
    //backgroundColor: '#6b6f70'
  },
});

class AlbumList extends Component {
  constructor(){
    super();
    this.state = {
      isRedirect: 0
    }
  }
  _renderRedirect(){
    if(this.state.isRedirect === 0){

    }else if(this.state.isRedirect === 1){
      return <Redirect to={`/addalbumlist`}/>
    }else if(this.state.isRedirect === 2){
      return <Redirect to={`/showalbumlist`}/>
    }
  }
  render(){
    const { classes } = this.props;

    return (

     

      <div style={{
        //top: '0', bottom: '0', left: '0', right: '0', position: 'absolute',
        backgroundImage: `url('https://i.imgur.com/kea3uBg.jpg')`,
        //backgroundPosition: 'top left',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#ffffff'
      }}>
      <Grid container spacing={24}>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Button mini color="secondary" aria-label="Add" className={classes.button} onClick={ () => this.setState({isRedirect: 1})}>

              <AddIcon />
              <a>新增畢業紀念冊</a>
            </Button>
            <Button mini color="secondary" aria-label="Add" className={classes.button}
             onClick={ ()=> this.setState({isRedirect: 2})}>
              <AddIcon />
              <a>畢業紀念冊</a>
            </Button>
            </Grid>
        </Grid>
        {
          this._renderRedirect()
        }
        <br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    )
  }
}

export default withStyles(styles)(AlbumList);