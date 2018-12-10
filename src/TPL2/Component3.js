import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/Component5_elImage_778823.jpg';
import img_elImage2 from './images/Component3_elImage2_129910.jpg';


export default class Component3 extends Component {

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
    const style_image2 = {
        backgroundImage: 'url('+img_elImage2+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        width: '550px',
        left:'30px',
        
     };
    const style_image2_outer = {
        left:'30px',
        width: '400px',
        height: '346px',
     };
 
 
    
    return (
      <div className="Component3" style={baseStyle}>
        <div className="background">
          <div className='elImage' style={style_image} />
        </div>
        <div className="layoutFlow">
          <div className='elImage2'  style={style_image2}>
            
          
          </div>
        </div>
      </div>
    )
  }
  

}
