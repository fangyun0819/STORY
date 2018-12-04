import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Album from './components/Album';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

//樣式設定
const styles = theme => ({

});


//點選按鈕設定
class ShowAlbumList extends React.Component {
  render() {
    return (
      <Grid container spacing={24}>
        <Album/>
        
      </Grid>
      
    );
  }
}

export default withStyles(styles)(ShowAlbumList);