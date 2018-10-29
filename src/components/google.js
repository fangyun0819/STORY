import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
 
class google extends React.Component{
    state = {isLoggedIn: false};
 
  constructor (props, context) {
    super(props, context);
  }
 
  responseGoogle (googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var googleId = googleUser.getId();
    
    console.log({ googleId });
    console.log({accessToken: id_token});
    //anything else you want to do(save to localStorage)...

    this.setState({isLoggedIn: true});
  };
 
  componentClicked = () => console.log("clicked");

  render () {
      
    return (
      <div>
        <GoogleLogin socialId="550377049635-68reuqdhq4pc503mp25e15c5tdrgjv37.apps.googleusercontent.com"
                     className="google-login"
                     scope="profile"
                     fetchBasicProfile={false}
                     responseHandler={this.responseGoogle}
                     buttonText="Login With Google"
                     />
      </div>
    );
  }
 
}
 
export default Login;