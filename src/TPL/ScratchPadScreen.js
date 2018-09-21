import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import background from './images/storybook.jpg';


export default class ScratchPadScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elButton = (ev) => {
    // Go to screen 'page.1'
    this.props.appActions.goToScreen('page1', { transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_background = {
        width: '100%',
        height: '100%',
        backgroundImage: 'url('+background+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
     };
    const style_background_outer = {
        backgroundColor: '#f6f6f6',
        pointerEvents: 'none',
     };

    const style_button = {
       
        display: 'center',
        textAlign: 'center',
     };
    const style_button_outer = {
        cursor: 'pointer',
     };
    
    return (
      <div className="AppScreen ScratchPadScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
           </div>
          
        </div>
      <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='actionFont elButton' style={style_button_outer}>
            <Button  style={style_button}  color="accent" onClick={this.onClick_elButton} >
            開啟
            </Button>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
