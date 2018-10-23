import React, { Component } from "react";

import Login from './Login';
import New1 from './New1';



class Routes extends Component {

    state = {
        isloggedin: false
    }

    islogged = (status) => {
        this.setState({isloggedin: status});
    }

    render() {
        if(this.props.isloggedin === false)
            return(
                <Login
                islogged={this.islogged}/>
            );
        
        

        if(this.props.isloggedin === true)
            return(
                
                    <New1 
                    islogged={this.islogged}/>
                
            );
        }
    }       

export default Routes;