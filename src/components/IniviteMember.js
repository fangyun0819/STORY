import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

class InviteMember extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } =  this.props;
    return (
      <div>
        
        <Button onClick={this.handleClickOpen}>addAccount
        <AddIcon className={classNames(classes.leftIcon, classes.iconSmall)}/>
        </Button> 
        <Dialog
              
              open={this.state.open}
              onClose={() => this.handleClickClose2}
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

      </div>
    );
  }
}
export default withStyles(styles)(InviteMember);

