import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/Component10_elImage_280347.jpg';
import img_elImage2 from './images/Component10_elImage2_257160.jpg';
import img_elImageCopy from './images/Component10_elImage2_257160.jpg';
import img_elImageCopy2 from './images/Component10_elImage2_257160.jpg';


export default class Component10 extends Component {

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
        left: '0px',
        top: '0px',
        width: '668px',
        height: '473px',
     };
    const style_text = {
        color: 'rgba(7, 7, 7, 0.8500)',
        textAlign: 'left',
        textShadow: 'rgba(255, 255, 255, 0.7500) 0.0px 2.3px 0.0px',
        margintop: '431px',
        width: '378px',
        marginleft: '4px',
     };
    const style_text_outer = {
        pointerEvents: 'none',
        width: '378px',
        height: '43px',
     };
    const style_image2 = {
        backgroundImage: 'url('+img_elImage2+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
        left: '9px',
        top: '11px',
        width: '316px',
        height: '419px',
     };
    const style_imageCopy = {
        backgroundImage: 'url('+img_elImageCopy+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
        left: '338px',
        top: '8px',
        width: '300px',
        height: '226px',
     };
    const style_imageCopy2 = {
        backgroundImage: 'url('+img_elImageCopy2+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
        left: '338px',
        top: '240px',
        width: '300px',
        height: '226px',
     };
    
    return (
      <div className="Component10" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
          <div className='elImage' style={style_image} />
        </div>
        <div className="layoutFlow">
          <div className='baseFont elText' style={style_text_outer}>
            <div style={style_text}>
              <div>{this.props.locStrings.component10_text_954756}</div>
            </div>
          
          </div>
          
        </div>
        <div className="foreground">
          <div className='elImage2' style={style_image2} />
          <div className='elImageCopy' style={style_imageCopy} />
          <div className='elImageCopy2' style={style_imageCopy2} />
        </div>
      </div>
    )
  }
  

}
