import React, { Component } from 'react';
import './App.css';
import Component1 from './Component1';
import btn_icon_back_screen1 from './images/btn_icon_back_screen1.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';
import Container from 'muicss/lib/react/container';
import {SketchField, Tools} from 'react-sketch';


export default class Screen1 extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elButton = (ev) => {
    // Go to screen 'Screen2'
    this.props.appActions.goToScreen('screen2', { transitionId: 'fadeIn' });
  
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
        color: 'white',
        textAlign: 'center',
     };
    const style_button_outer = {
        cursor: 'pointer',
     };
    
    return (
      <Container fluid={true} className="AppScreen Screen1" style={baseStyle}>
        <SketchField width='1024px' 
              height='768px' 
              tool={Tools.Select} 
              lineColor='black'
              ref={c => (this._sketch = c)}
              value={{"version":"2.4.3","objects":[{"type":"image","version":"2.4.3","originX":"left","originY":"top","left":330.9,"top":203.18,"width":1280,"height":853,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":0.23,"scaleY":0.23,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"crossOrigin":"","cropX":0,"cropY":0,"src":"http://localhost:3000/static/963d1f55-17a0-4611-b760-064d72dcdf51.jpg","filters":[]},{"type":"image","version":"2.4.3","originX":"left","originY":"top","left":-64.59,"top":440.54,"width":1280,"height":853,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":0.27,"scaleY":0.27,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"crossOrigin":"","cropX":0,"cropY":0,"src":"http://localhost:3000/static/963d1f55-17a0-4611-b760-064d72dcdf51.jpg","filters":[]},{"type":"image","version":"2.4.3","originX":"left","originY":"top","left":-169.37,"top":444.1,"width":1280,"height":853,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":0.35,"scaleY":0.35,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"crossOrigin":"","cropX":0,"cropY":0,"src":"http://localhost:3000/static/963d1f55-17a0-4611-b760-064d72dcdf51.jpg","filters":[]}],"background":"transparent","backgroundImage":{"type":"image","version":"2.4.3","originX":"left","originY":"top","left":0,"top":0,"width":1440,"height":809,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"crossOrigin":"","cropX":0,"cropY":0,"src":"https://i.imgur.com/7Ja149p.jpg","filters":[]}}}
              lineWidth={3}/>
      </Container>
    )
  }
  

}
