import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/Component3_elImage_1040006.jpg';
import img_elImageCopy2 from './images/Component10_elImageCopy2_644434.jpg';
import img_elImageCopy from './images/Component10_elImageCopy2_644434.jpg';
import img_elImageCopy3 from './images/Component10_elImageCopy2_644434.jpg';
import img_elImageCopy4 from './images/Component10_elImageCopy2_644434.jpg';


export default class Component3 extends Component {

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
        left: '234px',
        top: '0px',
        width: '200px',
        height: '480px',
     };
    const style_imageCopy2 = {
        backgroundImage: 'url('+img_elImageCopy2+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
        left: '0px',
        top: '0px',
        width: '238px',
        height: '238px',
     };
    const style_imageCopy = {
        backgroundImage: 'url('+img_elImageCopy+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
        left: '0px',
        top: '238px',
        width: '238px',
        height: '238px',
     };
    const style_imageCopy3 = {
        backgroundImage: 'url('+img_elImageCopy3+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
        right: '0px',
        top: '0px',
        width: '238px',
        height: '238px',
     };
    const style_imageCopy4 = {
        backgroundImage: 'url('+img_elImageCopy4+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
        right: '0px',
        top: '238px',
        width: '238px',
        height: '238px',
     };
    
    return (
      <div className="Component3" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
          <div className='elImage' style={style_image} />
        </div>
        <div className="foreground">
          <div className='elImageCopy2' style={style_imageCopy2} />
          <div className='elImageCopy' style={style_imageCopy} />
          <div className='elImageCopy3' style={style_imageCopy3} />
          <div className='elImageCopy4' style={style_imageCopy4} />
        </div>
      </div>
    )
  }
  

}
