import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';



const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  container: {
    marginTop: 200,
    //backgroundColor: '#00B1E1'
  },
});

class NewMember extends React.Component {
  constructor(){
    super();
    this.state = {
      members: ["default"],
      confirmedMembers: ["default", "default", "default"],
    }
  }
  _renderMemberInput(){
    return this.state.members.map(function(item, i){
      return <Grid item xs={12} sm={12}>
      <TextField 
      key={i}
      label="輸入信箱"
      fullWidth>{item}</TextField>
      </Grid>
    })
  }
  _renderButton(){
    return(
    <Grid item xs={12} sm={12}>
      <Button mini color="secondary" aria-label="Add" onClick={ () => {
        let {members} = this.state;
        members.push("default")
        this.setState({members})
        }}>
        <AddIcon />
      </Button>
      <Button mini color="secondary" aria-label="Add">
        <p>確定邀請</p>
      </Button>
    </Grid>
    )
  }
  
  _renderMembers(){
    return this.state.confirmedMembers.map(function(item, i){
      return (
        <div>
          <a>已加入</a>
          <Avatar alt="members" src="https://i.imgur.com/JbUZQho.jpg" />
          <a>Chia Yu</a>
        </div>
      )
    })
  }
  render(){
    
    return  (<React.Fragment>
    <Typography variant="title" gutterBottom>
      輸入信箱邀請成員
    </Typography>
    <Grid container spacing={24}>
      {
        this._renderMemberInput()
      }
      {
        this._renderButton()
      }
    </Grid>
    <Divider />
    <Grid   
      container
      direction="row"
      justify="space-evenly"
    >
      {
        this._renderMembers()
      }
    </Grid>
  </React.Fragment>)
  }
}

export default withStyles(styles)(NewMember);