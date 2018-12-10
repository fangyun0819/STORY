import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/Component4_elImage_404144.jpg';
import img_elImageCopy from './images/Component7_elImageCopy_1027808.jpg';


export default class Component3 extends Component {

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
        position: 'absolute',
        left: '0px',
        top: '0px',
        width: '668px',
        height: '473px',
     };
    const style_card_outer = {
        backgroundColor: 'white',
        boxShadow: '0.0px 6.8px 74px rgba(0, 0, 0, 0.4500)',
        pointerEvents: 'none',
        margintop: '27px',
        width: '276px',
        marginleft: '34px',
     };
    const style_cardCopy2_outer = {
        backgroundColor: 'white',
        boxShadow: '0.0px 6.8px 74px rgba(0, 0, 0, 0.4500)',
        pointerEvents: 'none',
        margintop: '27px',
        width: '276px',
       left: '350px',
     };
    const style_image2 = {
        backgroundImage: 'url('+img_elImageCopy+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
        left: '328px',
        top: '15px',
        width: '252px',
        height: '334px',
     };
    const style_imageCopy = {
        backgroundImage: 'url('+img_elImageCopy+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
        left: '45px',
        top: '48px',
        width: '252px',
        height: '334px',
     };
    
    return (
      <div className="Component3" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
          <div className='elImage' style={style_image} />
        </div>
        <div className="layoutFlow">
          <div className='cardBg elCard' style={style_card_outer}>
            <div />
          </div>
          <div className='cardBg elCardCopy2' style={style_cardCopy2_outer}>
            <div />
          </div>


        </div>
        <div className="foreground">
          <div className='elImageCopy' style={style_imageCopy} />
          <div className='elImage2' style={style_image2} />

        </div>
      </div>
    )
  }
  

}
