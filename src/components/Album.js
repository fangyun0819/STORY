import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import SimpleModalWrapped from './SimpleModalWrapped';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Redirect } from 'react-router-dom';

import ThemePC from '../reactStudio/ThemePC';
import axios from 'axios';


const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

const cards = ['團體', '個人'];
const images = ["https://i.imgur.com/9NUDaSC.jpg", "https://images.pexels.com/photos/583399/pexels-photo-583399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "https://images.pexels.com/photos/1330808/pexels-photo-1330808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"]

class Album extends React.Component {
  state = {
    redirect: false,
    selection: 0,
    albumNames: [],
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  };

  componentDidMount(){
    axios.get('/rest/getgraduatebook')
    .then((result) => {
      let albumNames = [];
      result.data.forEach(element => {
        albumNames.push({bookName: element.memoryProjectName, bookId: element.memoryProjectId})
      });
     this.setState( { albumNames});
    });
  }

  renderRedirect = () => {
    if(this.state.isRedirect === 0){

    }else if(this.state.isRedirect === 1){
      return <Redirect to={`/photo`}/>
    }else if(this.state.isRedirect === 2){
      return <Redirect to={`/setting`}/>
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  _showAlbums(){
    const { classes } = this.props;

    return (
      <div>
        {this.state.albumNames.map( (val ) => {
          return (
            <Card>
            <CardActions style={{ flex: 1 }}>
              <Button size="small">
                {cards[this.state.selection]}
              </Button>
            </CardActions>
            <CardMedia
              className={classes.cardMedia}
              image={images[this.state.selection]}
              title="Image title"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
               {val.bookName}
              </Typography>
            </CardContent>
            <CardActions>
            <Button
                onClick={ () => {
                  this.setState({isRedirect: 1});
                  localStorage.setItem('currentBookId',val.bookId)
                }}
                size="small" color="primary">
                上傳照片</Button>
              {this.renderRedirect()}
              <Button
                onClick={ () => this.setState({isRedirect: 2})}
                size="small" color="primary">
                更改基本設定</Button>
              <Button onClick={this.handleClickOpen} size="small" color="primary">
                檢視作品集
              </Button>
              <Dialog
                fullScreen
                open={this.state.open}
                onClose={this.handleClose}
              >
                <DialogTitle align="center">{"畢業紀念冊1"}</DialogTitle>
                <DialogContent>
                  <Grid container spacing={24}>
                    <Grid item xs>
                    </Grid>
                    <Grid item xs={6}>
                      <ThemePC />
                    </Grid>
                    <Grid item xs>
                    </Grid>
                  </Grid>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary" autoFocus>
                    CLOSE
                    </Button>
                </DialogActions>
              </Dialog>
            </CardActions>
          </Card>
          )
        })}
      </div>
    )
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Button variant="outlined" color="primary" onClick={() => this.setState({ selection: 0 })}>
            團體
        </Button>
          <Button variant="outlined" color="primary" onClick={() => this.setState({ selection: 1 })} >
            個人
        </Button>
        </Grid>
        <main>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            <Grid container spacing={40}>
              <Grid item key={cards[this.state.selection]} sm={4} md={4} lg={4}>
                {this._showAlbums()}
              </Grid>
            </Grid>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
Album.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Album);