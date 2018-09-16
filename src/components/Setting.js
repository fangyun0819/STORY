import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import blue from '@material-ui/core/colors/blue';
import PropTypes from 'prop-types';

require('./components.css');

const emails = ['username@gmail.com', 'user02@gmail.com'];
const styles = theme => ({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
 
});

class SimpleDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.props.onClose(this.props.chooseMember);
  };

  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };
 

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog  onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">好友名單</DialogTitle>
        <div>
          <List>
            {emails.map(email => (
              <ListItem onClick={() => this.handleListItemClick(email)} key={email}>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={email} />
                  <Avatar>
                  <DeleteIcon />
                  </Avatar>
              </ListItem>
            ))}
            <ListItem button onClick={() => this.handleClickOpen('addAccount')}>
              <ListItemAvatar>
                <Avatar>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="add account" />
              <Dialog
              
              open={this.state.open}
              onClose={this.handleClose2}
              aria-labelledby="form-dialog-title"
        >
          <DialogTitle  style={{width: 500}} id="form-dialog-title">請輸入邀請信箱</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick= { () => alert("邀請信已寄出")} color="primary">
              邀請
            </Button>
            <Button onClick={this.handleClose} variant="outlined" >
                關閉
              </Button>
          </DialogActions>
        </Dialog>

            </ListItem>
            <Button onClick={this.handleClose} variant="outlined" >
                確定
              </Button>
          </List>
        </div>
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);



class Info extends React.Component {
  state = {
    open: false,
    selectedValue: emails[1],
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
  };
 



  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;
 
    return (
  
    <React.Fragment>
     <main className={classes.layout}>
     <Paper className={classes.paper}>
      <Grid container spacing={24} >
      <Typography id="text" align="center">
        更改畢業紀念冊設定
      </Typography>
      <Grid item xs={12} sm={12}>
          <TextField
            required
            id="Name"
            name="Name"
            label="更改名稱"
            fullWidth
          /> 
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="Name"
            name="Name"
            label="更改說明"
            fullWidth
          /> 
        </Grid>
        <Grid item xs={12} sm={12}>
       
        <Button onClick={this.handleClickOpen}>更改好友</Button>
        <SimpleDialogWrapped
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
        />
        </Grid>
        <Button variant="outlined" size="large">
          確定
        </Button>
        </Grid>
        </Paper>
      </main >
    </React.Fragment>
  );

} 
}
export default withStyles(styles)(Info);