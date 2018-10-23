import React, { Component } from "react";
import { GoogleLogin } from 'react-google-login';




class Login extends Component {

constructor(props, context) {
    super(props, context);
    this.responseGoogle = this.responseGoogle.bind(this);
}
 

responseGoogle (response) {
  console.log(response.profileObj.email);
  var htt = new XMLHttpRequest();
  var url = 'http://localhost:4000/login';
  var params = JSON.stringify({"email": response.profileObj.email});
  htt.open('POST', url, true);
  htt.setRequestHeader('Content-type', 'application/json');
  htt.send(params);
  var func = this;
  htt.onreadystatechange = function() {//Call a function when the state changes.
    if(htt.readyState === 4 && htt.status === 200) {
        console.log(htt.responseText);
        var jso = JSON.parse(htt.responseText);
        if(jso.result  === "success")
        {
          func.props.islogged("true");
        }
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
                  clientId="1077614844405-65of2m8105hu8gphvg6lv4m2itr6oi9m.apps.googleusercontent.com"
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
 
export default Login;
