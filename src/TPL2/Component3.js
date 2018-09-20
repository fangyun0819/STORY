import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/Component3_elImage_586463.jpg';
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
     };
    const style_image2 = {
        backgroundImage: 'url('+img_elImage2+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_image2_outer = {
        pointerEvents: 'none',
     };
    const style_text = {
        fontSize: 23.7,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_text_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="Component3" style={baseStyle}>
        <div className="background">
          <div className='elImage' style={style_image} />
        </div>
        <div className="layoutFlow">
          <div className='elImage2' style={style_image2_outer}>
            <div style={style_image2} />
          
          </div>
          
          <div className='font-didot  elText' style={style_text_outer}>
            <div style={style_text}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.component3_text_830225.replace(/\n/g, '<br>')}}></div></div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
