import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/Component9_elImage_372538.jpg';
import img_elImageCopy3 from './images/Component10_elImageCopy3_333598.jpg';
import img_elImageCopy from './images/Component10_elImageCopy3_333598.jpg';
import img_elImageCopy2 from './images/Component10_elImageCopy3_333598.jpg';
import img_elImageCopy4 from './images/Component10_elImageCopy3_333598.jpg';


export default class Component9 extends Component {

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
    const style_imageCopy3 = {
        backgroundImage: 'url('+img_elImageCopy3+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    const style_imageCopy = {
        backgroundImage: 'url('+img_elImageCopy+')',
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
    const style_imageCopy4 = {
        backgroundImage: 'url('+img_elImageCopy4+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    
    return (
      <div className="Component9" style={baseStyle}>
        <div className="background">
          <div className='elImage' style={style_image} />
        </div>
        <div className="foreground">
          <div className='elImageCopy3' style={style_imageCopy3} />
          <div className='elImageCopy' style={style_imageCopy} />
          <div className='elImageCopy2' style={style_imageCopy2} />
          <div className='elImageCopy4' style={style_imageCopy4} />
        </div>
      </div>
    )
  }
  

}
