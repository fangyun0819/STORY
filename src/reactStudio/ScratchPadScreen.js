import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from '@material-ui/core/Button';
import background from './images/story.jpeg';


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
     };
    const style_background_outer = {
        backgroundColor: '#f6f6f6',
        pointerEvents: 'none',
     };
    const style_text = {
        color: 'rgba(7, 7, 7, 0.8500)',
        textAlign: 'left',
        textShadow: 'rgba(255, 255, 255, 0.7500) 0.0px 2.3px 0.0px',
     };
    const style_text_outer = {
        pointerEvents: 'none',
     };
    const style_button = {
        display: 'block',
        textAlign: 'center',
     };
    const style_button_outer = {
        cursor: 'pointer',
     };
     const style_img={
      height: 500,
      width: 800,
    };
    
    return (
      <div className="AppScreen ScratchPadScreen" style={baseStyle}>
       <img style={style_img} src={background} />
          <div className='actionFont elButton' style={style_button_outer} textAlign='center'>
          <Button  style={style_button}  color="accent" onClick={this.onClick_elButton} >
          開啟
          </Button>
        </div>
      </div>
    )
  }
  

}
