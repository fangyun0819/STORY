import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/Component10_elImage_280347.jpg';



export default class Component7 extends Component {

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
    const style_card = {
        width: '100%',
        height: '100%',
     };
    const style_card_outer = {
        backgroundColor: 'white',
        boxShadow: '0.0px 6.8px 74px rgba(0, 0, 0, 0.4500)',
        pointerEvents: 'none',
     };
    
    
    return (
      <div className="Component10" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
          <div className='elImage' style={style_image} />
        </div>
        <div className="foreground">
          <div className='cardBg elCard' style={style_card_outer}>
            <div style={style_card} />
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
