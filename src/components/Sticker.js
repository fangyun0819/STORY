import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import StickerList from './StickerList';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 'auto',
    height: 250,
  },
  img:{
    width:100 ,
    height:100,
  }
 
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
  <div className={classes.root}>
   <GridList id="source-container" className={classes.gridList} cols={2}>
        {StickerList.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
          
          
          <img id="drag-source" draggable="true" className={classes.img} src={tile.img} />

          </GridListTile>
        ))}
      </GridList>
</div>

);
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);