import React,{Component} from 'react';
import Login from './Login';
import New3 from './New3';


class New1 extends Component{

  state={isloggedin:false};

  render(){
        if(this.state.isloggedin === false)
        {
          return(
              <Login />
            );
        }
      
        else
        {
          return(
              <New3 />
            );
        }
  }
}

export default New1;