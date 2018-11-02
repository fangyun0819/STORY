import React from 'react';
import GoogleLogin from 'react-google-login';

export default class google extends React.Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  }; 

 responseGoogle = (response) => {
  console.log(response);

  this.setState({
    isLoggedIn: true,
    userID: response.userID,
    name: response.name,
    email: response.email,
    picture: response.picture.data.url
  });
};
 
componentClicked = () => console.log("clicked");

render(){
  let googleContent;

  if (this.state.isLoggedIn) {
    googleContent = (
      <div
        style={{
          width: "400px",
          margin: "auto",
          background: "#f4f4f4",
          padding: "20px"
        }}
      >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
        </div>
      );
    } else {
      googleContent = (
        <GoogleLogin
        clientId="550377049635-68reuqdhq4pc503mp25e15c5tdrgjv37.apps.googleusercontent.com"
        buttonText="Login"
        autoLoad={true}
        fields="name,email,picture"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        />
        )
      }    

  document.getElementById('googleButton')

  return <div>{googleContent}</div>
    }
};