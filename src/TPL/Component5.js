import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/Component9_elImage_213121.jpg';
import img_elImageCopy5 from './images/Component5_elImageCopy5_539440.jpg';
import img_elImage2 from './images/Component5_elImageCopy5_539440.jpg';



export default class Component5 extends Component {

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
     };
    const style_imageCopy5 = {
        backgroundImage: 'url('+img_elImageCopy5+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    const style_image2 = {
        backgroundImage: 'url('+img_elImage2+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    
    
    return (
      <div className="Component5" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
          <div className='elImage' style={style_image} />
          <div className='elImageCopy5' style={style_imageCopy5} />
          <div className='elImage2' style={style_image2} />
        </div>
     
      </div>
    )
  }
  

}
