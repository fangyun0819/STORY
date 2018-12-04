import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/Component2_elImage_405622.jpg';
import img_elImageCopy4 from './images/Component7_elImageCopy_1027808.jpg';
import img_elImageCopy from './images/Component7_elImageCopy_1027808.jpg';
import img_elImageCopy2 from './images/Component7_elImageCopy_1027808.jpg';


export default class Component2 extends Component {

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
        left: '0px',
        top: '0px',
        width: '668px',
        height: '473px',
     };
    const style_imageCopy4 = {
        backgroundImage: 'url('+img_elImageCopy4+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
        left: '16px',
        top: '20px',
        width: '300px',
        height: '209px',
     };
    const style_imageCopy = {
        backgroundImage: 'url('+img_elImageCopy+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
        left: '350px',
        top: '20px',
        width: '300px',
        height: '209px',
     };
    const style_imageCopy2 = {
        backgroundImage: 'url('+img_elImageCopy2+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
        left: '16px',
        top: '245px',
        width: '635px',
        height: '209px',
     };
    
    return (
      <div className="Component2" style={baseStyle}>
        <div className="background">
          <div className='elImage' style={style_image} />
        </div>
        <div className="foreground">
          <div className='elImageCopy4' style={style_imageCopy4} />
          <div className='elImageCopy' style={style_imageCopy} />
          <div className='elImageCopy2' style={style_imageCopy2} />
        </div>
      </div>
    )
  }
  

}
