import React from 'react';
import LocalizedStrings from 'react-localization';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Page10Screen from '../reactStudio/Page10Screen'
import Page9Screen from '../reactStudio/Page9Screen'
import Page8Screen from '../reactStudio/Page8Screen'
import Page7Screen from '../reactStudio/Page7Screen'
import Page6Screen from '../reactStudio/Page6Screen'
import Page5Screen from '../reactStudio/Page5Screen'
import Page4Screen from '../reactStudio/Page4Screen'
import Page3Screen from '../reactStudio/Page3Screen'
import Page2Screen from '../reactStudio/Page2Screen'
import Page1Screen from '../reactStudio/Page1Screen'
import ScratchPadScreen from '../reactStudio/ScratchPadScreen'
import DataSheet_localizationSheet from '../reactStudio/DataSheet_localizationSheet';



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    display: 'auto',
    height: 200,
    width: 200,
  },
  button: {
    marginTop: theme.spacing.unit,
  },
  paper: {
    color: theme.palette.text.secondary,
    height: 500,
    width: 500,
  },
});

class EditList extends React.Component {
  constructor(props) {
    super(props);

    this.dataSheets = {};
    this.dataSheets['localizationSheet'] = new DataSheet_localizationSheet('localizationSheet', this.dataSheetDidUpdate);

    this.dataSlots = {};
    this.dataSlots['ds_activeLang'] = "en";

    this.updateLocalizationFromDataSheet(this.dataSheets['localizationSheet']);

    this.state = {
      currentScreen: 'scratchpad',
      currentScreenProps: {},
      screenFormatId: '',
      screenTransitionForward: true,
    }
    this.screenHistory = [ {...this.state} ];

  }

  windowDidResize = () => {
    let w = window.innerWidth;
    let formatId;
    if (w < 576) formatId = 'narrow-phone';
    else if (w < 768) formatId = 'wide-phone';
    else if (w < 1024) formatId = 'narrow-tablet';
    else formatId = 'wide-tablet';
    if (formatId !== this.state.screenFormatId) {
      this.setState({screenFormatId: formatId});
    }
  }

  componentDidMount() {
    this.windowDidResize();
    window.addEventListener('resize', this.windowDidResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowDidResize);
  }

  isLoading() {
    return this.state.loading;
  }

  goToScreen = (screenId, props) => {
    // This method is the default implementation and could be customized by a navigation plugin.

    let screenIdx = -1;  // Check if the screen is already in the history stack, and pop back if so
    for (let i = 0; i < this.screenHistory.length; i++) {
      if (this.screenHistory[i].currentScreen === screenId) {
        screenIdx = i;
        break;
      }
    }
    if (screenIdx > -1) {
      this.screenHistory.splice(screenIdx + 1, this.screenHistory.length - screenIdx - 1);
      let prevScreenState = this.screenHistory[screenIdx];
      this.setState({...prevScreenState, screenTransitionForward: false});
    }
    else {
      props = props || {};
      let screenState = {currentScreen: screenId, currentScreenProps: props};
      this.screenHistory.push(screenState);
      this.setState({...screenState, screenTransitionForward: true});
    }
    window.scrollTo(0, 0);
  }

  goBack = () => {
    // This method is the default implementation and could be customized by a navigation plugin.
    if (this.screenHistory.length < 2)
      return;

    this.screenHistory.splice(this.screenHistory.length - 1, 1);
    let prevScreenState = this.screenHistory[this.screenHistory.length - 1];
    this.setState({...prevScreenState, screenTransitionForward: false});
    window.scrollTo(0, 0);
  }

  getDataSheet = (sheetId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    return this.dataSheets[sheetId];
  }

  addToDataSheet = (sheetId, newRow, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    let sheet = this.dataSheets[sheetId];
    if (sheet && newRow) {
      sheet.addItem(newRow, this['serviceOptions_'+sheetId] || {});
    }
    this.setState(this.state);
  }

  updateInDataSheet = (sheetId, row, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      sheet.replaceItemByKey(row.key, row, this['serviceOptions_'+sheetId] || {});

      if (this.state.currentScreenProps.dataSheetRow) {
        let screenProps = {...this.state.currentScreenProps};
        screenProps.dataSheetRow = row;

        // Also update any props that were carried into a detail view
        for (let prop in screenProps) {
          if (row[prop] !== undefined) {
            screenProps[prop] = row[prop];
          }
        }
        this.setState({currentScreenProps: screenProps});
      } else {
        this.setState(this.state);
      }
    }
  }

  removeFromDataSheet = (sheetId, row) => {
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      sheet.removeItem(row, this['serviceOptions_'+sheetId] || {});
    }
    this.setState(this.state);
  }

  updateDataSlot = (slotId, value, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    this.dataSlots[slotId] = value;
    if (slotId === 'ds_activeLang') {
      this.locStrings.setLanguage(value);
    }
    this.setState(this.state);
  }

  dataSheetDidUpdate = (dataSheet) => {
    // This method is the default implementation and could be customized by a state management plugin.
    this.setState(this.state);
  }

  updateLocalizationFromDataSheet = (dataSheet) => {
    const stringsObj = dataSheet.getStringsByLanguage();
    if (stringsObj && Object.keys(stringsObj).length > 0) {
      this.locStrings = new LocalizedStrings(stringsObj);
    } else {
      this.locStrings = new LocalizedStrings({en: {}});
    }
    this.locStrings.setLanguage(this.dataSlots['ds_activeLang']);
  }

  render() {
    const { classes } = this.props;
    let makeElementForScreen = (screenId, baseProps, atTop, forward) => {
      let screenProps = {
        ...baseProps,
        atTopOfScreenStack: atTop,
        transitionForward: forward,
        appActions: this,
        dataSheets: this.dataSheets,
        locStrings: this.locStrings,
        deviceInfo: {
          screenFormatId: this.state.screenFormatId
        },
        ds_activeLang: this.dataSlots['ds_activeLang'],
      };
      switch (screenId) {
        default:
          return null;
        case 'page10':
          return (<Page10Screen {...screenProps} />)
        case 'page9':
          return (<Page9Screen {...screenProps} />)
        case 'page8':
          return (<Page8Screen {...screenProps} />)
        case 'page7':
          return (<Page7Screen {...screenProps} />)
        case 'page6':
          return (<Page6Screen {...screenProps} />)
        case 'page5':
          return (<Page5Screen {...screenProps} />)
        case 'page4':
          return (<Page4Screen {...screenProps} />)
        case 'page3':
          return (<Page3Screen {...screenProps} />)
        case 'page2':
          return (<Page2Screen {...screenProps} />)
        case 'page1':
          return (<Page1Screen {...screenProps} />)
        case 'scratchpad':
          return (<ScratchPadScreen {...screenProps} />)
      }
    }

    let screenEl = makeElementForScreen(this.state.currentScreen, this.state.currentScreenProps, true, this.state.screenTransitionForward);
    let prevScreenEl = null;
    if (this.screenHistory.length >= 2) {  // For transitions, we want to show the previous screen below
      let prevScreenState = this.screenHistory[this.screenHistory.length - 2];
      prevScreenEl = makeElementForScreen(prevScreenState.currentScreen, prevScreenState.currentScreenProps, false, this.state.screenTransitionForward);
    }

  return (
      <Grid item container xs={24}>
        <Grid item xs={6} sm={3}>
        {prevScreenEl}
        {screenEl}
        <Card className={classes.card}>
         <CardContent>
           
          <Button onClick={this.handleClickOpen} variant="outlined" color="primary" className={classes.button}>
          畢業紀念冊1
          </Button>
          <Dialog
           fullWidth
           open={this.state.open}
           onClose={this.handleClose}
          >
          <DialogTitle>{"畢業紀念冊1"}</DialogTitle>
          <DialogContent>
          

          </DialogContent>
          <DialogActions>
            
            <Button onClick={this.handleClose} color="primary" autoFocus>
              關閉
            </Button>
          </DialogActions>
          </Dialog>
           
         </CardContent>
        </Card>
        </Grid>
       </Grid>
     );
   }
}
EditList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditList);      