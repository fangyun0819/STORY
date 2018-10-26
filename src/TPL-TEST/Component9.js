import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/Component9_elImage_213121.jpg';
import img_elImageCopy2 from './photo/18.jpg';
import img_elImageCopy from './photo/19.jpg';
import img_elImageCopy3 from './photo/20.jpg';


export default class Component9 extends Component {

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
        textAlign: 'right',
        textShadow: 'rgba(255, 255, 255, 0.7500) 0.0px 2.3px 0.0px',
     };
    const style_text_outer = {
        pointerEvents: 'none',
     };
    const style_imageCopy2 = {
        backgroundImage: 'url('+img_elImageCopy2+')',
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
    const style_imageCopy3 = {
        backgroundImage: 'url('+img_elImageCopy3+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    
    return (
      <div className="Component9" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
          <div className='elImage' style={style_image} />
        </div>
        <div className="layoutFlow">
          <div className='baseFont elText' style={style_text_outer}>
            <div style={style_text}>
              <div>{this.props.locStrings.component9_text_761510}</div>
            </div>
          
          </div>
          
        </div>
        <div className="foreground">
          <div className='elImageCopy2' style={style_imageCopy2} />
          <div className='elImageCopy' style={style_imageCopy} />
          <div className='elImageCopy3' style={style_imageCopy3} />
        </div>
      </div>
    )
  }
  

}
