import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Album from './components/Album';

//樣式設定
const styles = theme => ({

});


//點選按鈕設定
class ShowAlbumList extends React.Component {
  render() {
    return (
      <Album/>
    );
  }
}

export default withStyles(styles)(ShowAlbumList);