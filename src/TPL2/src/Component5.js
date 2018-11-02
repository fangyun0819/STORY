import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/Component5_elImage_778823.jpg';
import img_elImage2 from './images/Component5_elImage2_447196.jpg';
import img_elImageCopy5 from './images/Component7_elImageCopy_1027808.jpg';
import img_elImageCopy2 from './images/Component7_elImageCopy_1027808.jpg';
import img_elImageCopy3 from './images/Component7_elImageCopy_1027808.jpg';
import img_elImageCopy4 from './images/Component7_elImageCopy_1027808.jpg';


export default class Component5 extends Component {

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
    const style_image2 = {
        backgroundImage: 'url('+img_elImage2+')',
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
    const style_imageCopy2 = {
        backgroundImage: 'url('+img_elImageCopy2+')',
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
    const style_imageCopy4 = {
        backgroundImage: 'url('+img_elImageCopy4+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    
    return (
      <div className="Component5" style={baseStyle}>
        <div className="background">
          <div className='elImage' style={style_image} />
        </div>
        <div className="foreground">
          <div className='elImage2' style={style_image2} />
          <div className='elImageCopy5' style={style_imageCopy5} />
          <div className='elImageCopy2' style={style_imageCopy2} />
          <div className='elImageCopy3' style={style_imageCopy3} />
          <div className='elImageCopy4' style={style_imageCopy4} />
        </div>
      </div>
    )
  }
  

}
