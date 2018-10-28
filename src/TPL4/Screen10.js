import React, { Component } from 'react';
import './App.css';
import Component10 from './Component10';
import btn_icon_back_screen10 from './images/btn_icon_back_screen10.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';
import Container from 'muicss/lib/react/container';


export default class Screen10 extends Component {

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
    
    return (
      <Container fluid={true} className="AppScreen Screen10" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps elComponent'>
            <div>
              <Component10 ref={(el)=> this._elComponent = el} {...this.props} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">Page.10</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_screen10} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </Container>
    )
  }
  

}
