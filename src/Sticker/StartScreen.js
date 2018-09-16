import React, { Component } from 'react';
import './App.css';
import Component3 from './Component3';
import btn_icon_86525 from './images/btn_icon_86525.png';
import btn_icon_695461 from './images/btn_icon_695461.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';
import Container from 'muicss/lib/react/container';


export default class StartScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

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
    const style_card_outer = {
        backgroundColor: 'white',
        boxShadow: '0.0px 1.8px 14px rgba(0, 0, 0, 0.1600)',
        pointerEvents: 'none',
     };
    const style_card3_outer = {
        backgroundColor: 'white',
        boxShadow: '0.0px 1.8px 14px rgba(0, 0, 0, 0.1600)',
        pointerEvents: 'none',
     };
    const style_addText = {
        fontSize: 26.8,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        color: '#424242',
        textAlign: 'center',
        pointerEvents: 'none',
     };
    const style_hotspot = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
        pointerEvents: 'none',
     };
    const style_button = {
        display: 'block',
        fontSize: 14.4,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        textAlign: 'center',
        pointerEvents: 'none',
     };
    const style_fab = {
        display: 'block',
        fontSize: 0.0,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    const style_fabCopy = {
        display: 'block',
        fontSize: 0.0,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    const style_buttonCopy = {
        display: 'block',
        fontSize: 14.4,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        textAlign: 'center',
        pointerEvents: 'none',
     };
    const style_buttonCopy2 = {
        display: 'block',
        fontSize: 14.4,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        textAlign: 'center',
        pointerEvents: 'none',
     };
    
    return (
      <Container fluid={true} className="AppScreen StartScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='cardBg elCard' style={style_card_outer}>
            <div />
          
          </div>
          
          <div className='cardBg elCard3' style={style_card3_outer}>
            <div />
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">Start</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }></div>
        </Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='elAddText' style={style_addText}>
              <div>{this.props.locStrings.start_text_632178}</div>
            </div>
            <div className='actionFont elHotspot' style={style_hotspot}   />
            <div className='hasNestedComps elComponent'>
              <Component3 appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <Button className='elButton' style={style_button}  color="accent" >
              {this.props.locStrings.start_button_614334}
            </Button>
            <Button className='elFab' style={style_fab}  variant="fab" color="accent" >
              <img src={btn_icon_86525} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
            <Button className='elFabCopy' style={style_fabCopy}  variant="fab" color="accent" >
              <img src={btn_icon_695461} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
            <Button className='elButtonCopy' style={style_buttonCopy}  color="accent" >
              {this.props.locStrings.start_button_339434}
            </Button>
            <Button className='elButtonCopy2' style={style_buttonCopy2}  color="accent" >
              {this.props.locStrings.start_button_483977}
            </Button>
          </div>
        </div>
      </Container>
    )
  }
  

}
