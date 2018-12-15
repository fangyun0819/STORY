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
import axios from 'axios';


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
      confirmedMembers: [{
        name: "vivi",
        image: "https://i.imgur.com/Qvi9mAP.png",
        confirmed: false
      },{
        name: "travis",
        image: "https://i.imgur.com/yIymoWh.png",
        confirmed: false
      }, {
        name: "chinchin",
        image: "https://i.imgur.com/tPDnEDb.png",
        confirmed: false
      }, {
        name: "stacy",
        image: "https://i.imgur.com/2YmwqrU.png",
        confirmed: false
      }, {
        name: "kevin",
        image: "https://i.imgur.com/mupYPXP.png",
        confirmed: false
      }],
      currentEmail: '',
      showAvatar: false
    }
  }

  componentDidMount(){
    this.handleChange = this.props.handleChange;
    setTimeout(() => {
      let {confirmedMembers} = this.state;
      confirmedMembers[3].confirmed = true;  
      this.setState({confirmedMembers})
    }, 40000);
  }
  _renderMemberInput(){
    return this.state.members.map(function(item, i){
      return <Grid item xs={12} sm={12}>
      <TextField 
      key={i}
      label="輸入信箱"
      onChange={ (event) => {
        let {members} = this.state;
        members[i] = event.target.value;
        this.setState({members});
        this.handleChange(members);
        //console.log(members)
    }}
      fullWidth>{item}</TextField>
      </Grid>
    }, this)
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
      <Button mini color="secondary" aria-label="Add" onClick={ () =>{
        this.setState({showAvatar: true});
        axios.post('/rest/newMember', {
          "email": this.state.members,
          "bookName": this.props.bookName,
          "bookId": this.props.bookId
        });
        alert('新增成功');
      }}>
        <p>確定邀請</p>
      </Button>
    </Grid>
    )
  }
  
  // _renderMembers(){
  //   return this.state.members.map((item, i) => {
  //     if( this.state.showAvatar ){
  //       return (
  //         <div>
  //           { this.state.confirmedMembers[i].confirmed ? <a>已加入</a> : "未加入"}
  //           <Avatar alt="members" src={this.state.confirmedMembers[i].image} />
  //           { this.state.confirmedMembers[i].confirmed ? <a>{this.state.confirmedMembers[i].name}</a> : this.state.confirmedMembers[i].name}
  //           <br/>
  //         </div>
  //       )
  //     }
  //   })
  // }
  
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
      {/* {
        this._renderMembers()
      } */}
    </Grid>
  </React.Fragment>)
  }
}

export default withStyles(styles)(NewMember);