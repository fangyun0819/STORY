import React, { Component } from 'react';
import './App.css';
import Component4 from './Component4';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';


export default class Screen4 extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elButton = (ev) => {
    // Go to screen 'Screen5'
    this.props.appActions.goToScreen('screen5', { transitionId: 'fadeIn' });
  
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
    const style_button = {
        display: 'block',
        textAlign: 'center',
     };
    const style_button_outer = {
        cursor: 'pointer',
     };
    
    return (
      <Container fluid={true} className="AppScreen Screen4" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps elComponent'>
            <div>
              <Component4 appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='actionFont elButton' style={style_button_outer}>
            <Button style={style_button}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.screen15_button_602613}
            </Button>
          
          </div>
          
        </div>
      </Container>
    )
  }
  

}
