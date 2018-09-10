import React, { Component} from 'react';
import { List, Datagrid, EmailField, TextField } from 'react-admin/lib';
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Album from './components/Album';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import { Edit, SimpleForm, SaveButton, Toolbar } from 'react-admin';
import { Redirect } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class AlbumList extends Component {
  constructor(){
    super();
    this.state = {
      isRedirect: false
    }
  }
  _renderRedirect(){
    if(this.state.isRedirect)
      return <Redirect to={`/addalbumlist`}/>
  }
  render(){
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Button mini color="secondary" aria-label="Add" className={classes.button} onClick={ () => this.setState({isRedirect: true})}>
              <AddIcon />
              <a>新增畢業紀念冊</a>
            </Button>
          </Toolbar>
        </AppBar>

        {
          this._renderRedirect()
        }
        <Album/>
      </div>
    )
  }
}

export default withStyles(styles)(AlbumList);