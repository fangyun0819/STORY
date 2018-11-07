import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/Component3_elImage_878299.jpg';
import img_elImageCopy from './images/Component10_elImage2_257160.jpg';
import img_elImageCopy2 from './images/Component8_elImageCopy_560966.jpg';


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
        backgroundColor: 'white',
        pointerEvents: 'none',
     };
    const style_image = {
        backgroundImage: 'url('+img_elImage+')',
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
    
    return (
      <div className="Component2" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
          <div className='elImage' style={style_image} />
        </div>
        <div className="foreground">
          <div className='elImageCopy' style={style_imageCopy} />
          <div className='elImageCopy2' style={style_imageCopy2} />

        </div>
      </div>
    )
  }
  

}
