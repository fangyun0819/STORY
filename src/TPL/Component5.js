import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/Component9_elImage_213121.jpg';
import img_elImageCopy5 from './images/Component5_elImageCopy5_539440.jpg';
import img_elImage2 from './images/Component5_elImageCopy5_539440.jpg';
import img_elImageCopy3 from './images/Component10_elImage2_257160.jpg';
import img_elImageCopy4 from './images/Component10_elImage2_257160.jpg';
import img_elImageCopy from './images/Component10_elImage2_257160.jpg';
import img_elImageCopy2 from './images/Component10_elImage2_257160.jpg';


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
        left: '0px',
        right: '0px',
        top: '0px',
        height: '100%',
        width: '100%',
        height: '100%',
     };
    const style_image = {
        backgroundImage: 'url('+img_elImage+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
        left: '0px',
        top: '0px',
        width: '668px',
        height: '473px',
     };
    const style_image2 = {
        backgroundImage: 'url('+img_elImage2+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
        left: '44px',
        top: '0px',
        width: '600px',
        height: '150px',
     };
    const style_imageCopy3 = {
        backgroundImage: 'url('+img_elImageCopy3+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
        left: '454px',
        top: '114px',
        width: '203px',
        height: '270px',
     };
    const style_imageCopy4 = {
        backgroundImage: 'url('+img_elImageCopy4+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
        left: '219px',
        top: '114px',
        width: '223px',
        height: '168px',
     };
    const style_imageCopy = {
        backgroundImage: 'url('+img_elImageCopy+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
        left: '221px',
        top: '282px',
        width: '223px',
        height: '168px',
     };
    const style_imageCopy2 = {
        backgroundImage: 'url('+img_elImageCopy2+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
        left: '11px',
        top: '111px',
        width: '203px',
        height: '270px',
     };
    
    return (
      <div className="Component5" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
          <div className='elImage' style={style_image} />
          <div className='elImage2' style={style_image2} />
        </div>
        <div className="foreground">
          <div className='elImageCopy3' style={style_imageCopy3} />
          <div className='elImageCopy4' style={style_imageCopy4} />
          <div className='elImageCopy' style={style_imageCopy} />
          <div className='elImageCopy2' style={style_imageCopy2} />
        </div>
      </div>
    )
  }
  

}
