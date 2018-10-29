import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/Component1_elImage_141674.jpg';
import img_elImageCopy4 from './images/Component7_elImageCopy_1027808.jpg';
import img_elImageCopy2 from './images/Component7_elImageCopy_1027808.jpg';


export default class Component1 extends Component {

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
    const style_imageCopy4 = {
        backgroundImage: 'url('+img_elImageCopy4+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    const style_imageCopy2 = {
        backgroundImage: 'url('+img_elImageCopy2+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    
    return (
      <div className="Component1" style={baseStyle}>
        <div className="background">
          <div className='elImage' style={style_image} />
        </div>
        <div className="foreground">
          <div className='elImageCopy4' style={style_imageCopy4} />
          <div className='elImageCopy2' style={style_imageCopy2} />
        </div>
      </div>
    )
  }
  

}
