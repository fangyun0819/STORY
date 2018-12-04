import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/Component2_elImage_662270.jpg';
import img_elImageCopy2 from './images/Component10_elImageCopy2_644434.jpg';
import img_elImageCopy from './images/Component8_elImageCopy_937258.jpg';


export default class Component2 extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_background = {
        width: '100%',
        height: '100%',
     };
    const style_background_outer = {
        backgroundColor: '#f6f6f6',
        pointerEvents: 'none',
     };
    const style_image = {
        backgroundImage: 'url('+img_elImage+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
        top: '0px',
        width: '672px',
        height: '476px',
     };
    const style_imageCopy2 = {
        backgroundImage: 'url('+img_elImageCopy2+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
        top: '44px',
        width: '315px',
        height: '372px',
     };
    const style_imageCopy = {
        backgroundImage: 'url('+img_elImageCopy+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
        left: '341px',
        top: '43px',
        width: '315px',
        height: '372px',
     };
    
    return (
      <div className="Component2" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
          <div className='elImage' style={style_image} />
        </div>
        <div className="foreground">
          <div className='elImageCopy2' style={style_imageCopy2} />
          <div className='elImageCopy' style={style_imageCopy} />
        </div>
      </div>
    )
  }
  

}
