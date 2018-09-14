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
import ImagePicker from 'react-image-picker'
import 'react-image-picker/dist/index.css'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  container: {
    marginTop: 200,
    //backgroundColor: '#00B1E1'
  },
  button:{
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
class OrganizePhoto extends React.Component {
  constructor(){
    super();
    this.state = {
      images: [["https://cdn.minephoto.tw/image/photo/70add93be6e841ea9943391cfb2ba503T5m3w1R3.jpg", "https://cdn.minephoto.tw/image/photo/0f9bf6ae5f5245b4a3beafd8d439c9d02E6zJA88.jpg", "https://cdn.minephoto.tw/image/photo/1d3440c2e1cf4871ab991a7d274d90f73c35Wa23.jpg", "https://cdn.minephoto.tw/image/photo/cd63bb0fab52468c9d0618f3bfbc79a3f92P70P2.jpg"]],
      members: ['https://cdn.minephoto.tw/image/photo/70add93be6e841ea9943391cfb2ba503T5m3w1R3.jpg', "https://cdn.minephoto.tw/image/photo/0f9bf6ae5f5245b4a3beafd8d439c9d02E6zJA88.jpg", "https://cdn.minephoto.tw/image/photo/1d3440c2e1cf4871ab991a7d274d90f73c35Wa23.jpg", "https://cdn.minephoto.tw/image/photo/cd63bb0fab52468c9d0618f3bfbc79a3f92P70P2.jpg"]
    }
  }

  _renderImagePicker(){
    return this.state.images.map(( imagesOfSomeone, i) => {
      return (
        <div styles = {{
          whiteSpace: 'nowrap'
        }}>
          <Avatar alt="members" src={this.state.members[i]}/>
          <ImagePicker 
            multiple
            images={imagesOfSomeone.map((image, i) => ({src: image, value: i}))}
          />
          <Divider/>
        </div>
      )
    })
  }

  handleChange = (event, value) => {
    let images = this.state.images[0];
    images = shuffle(images);
    this.setState({images: [images]})
  };

  render(){
    const { classes } = this.props;
    return  (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="space-evenly"    
      >
          <Tabs  onChange={this.handleChange}>
            <Tab label="時間" ></Tab>
            <Tab label="地點" ></Tab>
            <Tab label="人"></Tab>
            <Tab label="成員"></Tab>
          </Tabs>
          {this._renderImagePicker()}
          
      </Grid>
      <div className={classes.button}>
       <Button variant="outlined" color="primary" >
        目前已使用0張照片</Button>
        </div>
  </React.Fragment>)
  }
}

export default withStyles(styles)(OrganizePhoto);