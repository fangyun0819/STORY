import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/Component8_elImage_779429.jpg';



export default class Component8 extends Component {

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
    
    const style_text = {
        color: 'rgba(7, 7, 7, 0.8500)',
        textAlign: 'left',
        textShadow: 'rgba(255, 255, 255, 0.7500) 0.0px 2.3px 0.0px',
        pointerEvents: 'none',
     };
    
    return (
      <div className="Component8" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
          <div className='elImage' style={style_image} />
        </div>
        <div className="foreground">
          <div className='baseFont elText' style={style_text}>
            <div>{this.props.locStrings.component8_text_193867}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
