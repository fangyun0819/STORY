import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/AddTextItem_elImage_52802.jpg';


export default class AddStickerItem extends Component {

  // Properties used by this component:
  // image

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
        backgroundImage: 'url('+(this.props.image || img_elImage)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_image_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="AddStickerItem" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow">
          <div className='elImage' style={style_image_outer}>
            <div style={style_image} />
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
