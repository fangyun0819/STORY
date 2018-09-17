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
        <Grid item xs={12}>
        <Button variant="outlined" color="primary" >
        全部
        </Button>
        <Button variant="outlined" color="primary" >
        個人
        </Button>
        <Button variant="outlined" color="primary" >
        團體
        </Button>
        </Grid>
        
        <Album/>
        
      </Grid>
      
    );
  }
}

export default withStyles(styles)(ShowAlbumList);