import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/Component4_elImage_404144.jpg';
import img_elImageCopy4 from './images/Component7_elImageCopy_1027808.jpg';


export default class Component4 extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_image = {
        backgroundImage: 'url('+img_elImage+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    const style_text = {
        fontSize: 53.8,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    const style_imageCopy4 = {
        backgroundImage: 'url('+img_elImageCopy4+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    
    return (
      <div className="Component4" style={baseStyle}>
        <div className="background">
          <div className='elImage' style={style_image} />
        </div>
        <div className="foreground">
          <div className='font-papyrus  elText' style={style_text}>
            <div>{this.props.locStrings.component4_text_144373}</div>
          </div>
          <div className='elImageCopy4' style={style_imageCopy4} />
        </div>
      </div>
    )
  }
  

}
