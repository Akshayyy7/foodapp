import React, { Component } from "react";
import { GoogleLogin } from 'react-google-login';
import { login } from './actions/log';
import { connect } from 'react-redux';


class Login extends Component {

constructor(props, context) {
    super(props, context);
    this.responseGoogle = this.responseGoogle.bind(this);
}
 

responseGoogle (response){
  console.log(response.tokenObj.id_token);
  var htt = new XMLHttpRequest();
  var url = 'http://localhost:5000/login';
  var params = JSON.stringify({"idToken": response.tokenObj.id_token});
  htt.open('POST', url, true);
  htt.setRequestHeader('Content-type', 'application/json');
  htt.send(params);
  var func = this;
  htt.onreadystatechange = function() {//Call a function when the state changes.
    if(htt.readyState === 4 && htt.status === 200) {
        console.log(htt.responseText);
        var jso = JSON.parse(htt.responseText);
        func.props.dispatch(login(jso.message));
        console.log(jso.message);
    }
  }
}


  render() {
    return(
      <div>
          <section id="banner">
            <div className="inner">
            <div className="innerr">
              <header className="align-center">
                <h2><font color="white">LOGIN</font></h2>
              </header>
              <GoogleLogin
                  clientId="25667199244-iai99upvkk90dg71asi1hvaqpdv0m8vt.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
              />
            </div>
            </div>
          </section>
      </div>);
  }
}
 
export default (Login);
