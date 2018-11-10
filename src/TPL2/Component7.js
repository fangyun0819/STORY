import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/Component7_elImage_306356.jpg';
import img_elImageCopy from './images/Component7_elImageCopy_1027808.jpg';
import img_elImageCopy3 from './images/Component7_elImageCopy_1027808.jpg';


export default class Component7 extends Component {

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
    const style_imageCopy = {
        backgroundImage: 'url('+img_elImageCopy+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
        left: '38px',
        top: '32px',
        width: '586px',
        height: '193px',
     };
    const style_imageCopy3 = {
        backgroundImage: 'url('+img_elImageCopy3+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
        left: '38px',
        top: '245px',
        width: '586px',
        height: '193px',
     };
    
    return (
      <div className="Component7" style={baseStyle}>
        <div className="background">
          <div className='elImage' style={style_image} />
        </div>
        <div className="foreground">
          <div className='elImageCopy' style={style_imageCopy} />
          <div className='elImageCopy3' style={style_imageCopy3} />
        </div>
      </div>
    )
  }
  

}
