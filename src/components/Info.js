import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

require('./components.css');

const styles = theme => ({
 

  bootstrapRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },

});


class Info extends React.Component {
  handleChange = event  => {
    this.props.handleChange(event.target.value);
  };
  
  render() {
    const { classes } = this.props;
    
 
    return (
  
    <React.Fragment>
      <Typography id="text" >
        請填寫畢業紀念冊基本資訊!!!!!!!!
      </Typography>
      
      <Grid container spacing={24} >
        <Grid item xs={12} sm={6}>

        <TextField
        fullWidth
        label="畢業念冊名稱"
        id="name"
        helperText="必填"
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.bootstrapRoot,
            input: classes.bootstrapInput,
          },
        }}
        InputLabelProps={{
          shrink: true,
          className: classes.bootstrapFormLabel,
        }}
        onChange= {this.handleChange}
      />
        </Grid>
       
       
        <Grid item xs={12} sm={6}>
        <TextField
        fullWidth
        label="說明"
        id="name"
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.bootstrapRoot,
            input: classes.bootstrapInput,
          },
        }}
        InputLabelProps={{
          shrink: true,
          className: classes.bootstrapFormLabel,
        }}
      />
          </Grid>
      </Grid>

    </React.Fragment>
  );

} 
}
export default withStyles(styles)(Info);