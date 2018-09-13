import React, {Component} from 'react';
import { fetchUtils,Admin, Resource } from 'react-admin/lib';
import jsonServerProvider from 'ra-data-json-server';
import AlbumList from './AlbumList';
import AddAlbumList from './AddAlbumList';
import AAAAIcon from '@material-ui/icons/Camera';
import PersonIcon from '@material-ui/icons/Person';
import authProvider from './authProvider';
import dataProvider from './dataProvider';
import LoginPage from './LoginPage';
import { Route } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import Profile from './components/Profile';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

import ShowAlbumList from './ShowAlbumList';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#000066',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#000066',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // error: will use the default color
  },
});

class App extends Component {
  isTwoSideBar = true;
  _renderResources(){

    if(this.isTwoSideBar){
      return (
        [<Resource name="allAlbums" options={{ label: '畢業紀念冊' }} list={AlbumList} icon={AAAAIcon}/>,
        <Resource name="Profile" options={{ label: '個人帳戶' }} list={Profile} icon={PersonIcon}/>]
      )
    }else{
      return(
        [<Resource name="allAlbums1" options={{ label: '寫真書作品集1' }} list={AlbumList} icon={AAAAIcon}/>,
        <Resource name="allAlbums2" options={{ label: '寫真書作品集2' }} list={AlbumList} icon={AAAAIcon}/>,
        <Resource name="allAlbums3" options={{ label: '寫真書作品集3' }} list={AlbumList} icon={AAAAIcon}/>, 
        <Resource name="allAlbums4" options={{ label: '寫真書作品集4' }} list={AlbumList} icon={AAAAIcon}/>, 
        <Resource name="allAlbums5" options={{ label: '寫真書作品集5' }} list={AlbumList} icon={AAAAIcon}/>]
      )
    }
  }

  render() {
    return(
      <Admin theme={theme} authProvider={authProvider} dataProvider={dataProvider} loginPage={LoginPage}
      title="StoryMaker"
      customRoutes={[<Route exact path="/addalbumlist" component={AddAlbumList} />, <Route exact path="/showalbumlist" component={ShowAlbumList} />]}>
          {this._renderResources()}
      </Admin>
    )
  }
}

export default App;