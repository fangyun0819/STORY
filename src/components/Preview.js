import React from "react";
import { Carousel } from "react-responsive-carousel";
import {SketchField, Tools} from 'react-sketch';
import axios from 'axios';



export default class Preview extends React.Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  render(){
    return(  <Carousel autoPlay>
      <div>
        <img src="https://i.imgur.com/J4Imkdw.jpg" />
        
      </div>
      
      {this._renderBlock()}
      
    </Carousel>)
  }
  componentDidMount(){
    console.log(this.props.bookId)
    axios.post('/rest/geteditphoto', {memoryProjectId: this.props.bookId})
    .then(res=> {
      //console.log(res.data);
      this.setState({data:res.data});
    })
  }

  _renderBlock(){
    return(
        this.state.data.map( (val, idx) => {
          return (
          <div>
            <SketchField width='1024px' 
                  height='400px' 
                  tool={Tools.Select} 
                  lineColor='white'
                  ref={c => (this._sketch = c)}
                  value={this.state.data[idx]}
                  lineWidth={10}/>
          </div>)
        })
    )
  }
  

}