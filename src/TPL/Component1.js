import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/CoverPhoto.jpg';
import img_elImage2 from './images/Component10_elImage2_257160.jpg';


export default class Component1 extends Component {

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
    const style_image2 = {
        backgroundImage: 'url('+img_elImage2+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        width: '252px',
        height: '334px',
        
     
     };
    const style_image2_outer = {
        pointerEvents: 'none',
        margintop: '56px',
        width: '252px',
        marginleft: '202px',
     };
    
    return (
      <div className="Component1" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
          <div className='elImage' style={style_image} />
        </div>
        <div className="layoutFlow">
          <div className='elImage2' style={style_image2_outer}>
            <div style={style_image2} />
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
