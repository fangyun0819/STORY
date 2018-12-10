import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/Component8_elImage_292054.jpg';


export default class Component8 extends Component {

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
        position: 'absolute',
        left: '0px',
        top: '0px',
        width: '668px',
        height: '473px',
     };
    const style_cardCopy2_outer = {
        backgroundColor: 'white',
        boxShadow: '0.0px 6.8px 74px rgba(0, 0, 0, 0.4500)',
        pointerEvents: 'none',
        position: 'relative',
        margintop: '18px',
        width: '276px',
        marginleft: '44px',
     };
    const style_cardCopy_outer = {
        backgroundColor: 'white',
        boxShadow: '0.0px 6.8px 74px rgba(0, 0, 0, 0.4500)',
        pointerEvents: 'none',
        position: 'relative',
        margintop: '-426px',
        width: '276px',
        marginleft: '350px',
     };
    
    return (
      <div className="Component8" style={baseStyle}>
        <div className="background">
          <div className='elImage' style={style_image} />
        </div>
        <div className="layoutFlow">
          <div className='cardBg elCardCopy2' style={style_cardCopy2_outer}>
            <div />
          
          </div>
          
          <div className='cardBg elCardCopy' style={style_cardCopy_outer}>
            <div />
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
