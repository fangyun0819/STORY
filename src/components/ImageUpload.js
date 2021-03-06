import React, { Component } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export default class ImageUpload extends Component {
  constructor() {
    super();
    this.state = {
      selectedFile: [],
      selectedFileDate: [],
      file: [],
      numOfFiles: 1
    };
  }

  onChange = (e, i) => {
    //console.log(index)
    let {selectedFile, file, selectedFileDate}= this.state;
    //console.log('lastModified' + e.target.files[0].lastModified)
    if(selectedFile.length < i){
      selectedFile.push(e.target.files[0]);
      selectedFileDate.push(e.target.files[0].lastModified);
      file.push(URL.createObjectURL(e.target.files[0]));  
    }else{
      selectedFile[i] = e.target.files[0];
      selectedFileDate[i] = e.target.files[0].lastModified;
      file[i] = URL.createObjectURL(e.target.files[0]);
    }
    this.setState({ selectedFile , file});

  }

  onSubmit = (e) => {
    e.preventDefault();
    const { selectedFile, selectedFileDate } = this.state;
    const { token, bookId} = this.props;
    for(let i = 0 ; i < selectedFile.length ; i ++){
      let formData = new FormData();

      formData.append('timeModified', selectedFileDate[i]);
      formData.append('selectedFile', selectedFile[i]);
      formData.append('token', token);
      formData.append('bookId', bookId);

  
      axios.post('/rest/upload-image', formData)
      .then((result) => {
        
      });
    }
  }

  _renderInput(){
    let input = [];
    for(let i = 0; i < this.state.numOfFiles ; i ++){
      input.push(
        <div>
          <input
            type="file"
            name="selectedFile"
            onChange={ (e) => this.onChange(e, i)}
          />
          <img src={this.state.file[i]} height="42" width="42"/>
        </div>
      )
    }

      return (
        <div>
          {input.map(function(item){
            return item;
          })}
        </div>
      );
  }

  render() {
    const { description, selectedFile } = this.state;
    
    return (
      <form onSubmit={this.onSubmit}>
        {this._renderInput()}
        <br/>
          <Button mini color="secondary" aria-label="Add" onClick={ () => {
            let {numOfFiles} = this.state;
            numOfFiles += 1;
            this.setState({numOfFiles})
          }}>
          <AddIcon />
        </Button>
        <br/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
