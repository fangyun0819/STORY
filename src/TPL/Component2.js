import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/Component2_elImage_430446.jpg';
import img_elImageCopy from './images/Component10_elImage2_257160.jpg';


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
        left: '467px',
        top: '0px',
        width: '202px',
        height: '473px',
     };
    const style_imageCopy = {
        backgroundImage: 'url('+img_elImageCopy+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
        left: '8px',
        top: '68px',
        width: '449px',
        height: '338px',
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
        </div>
      </div>
    )
  }
  

}
