import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin : true
      }
    }
    
  render() {
    return(
        this.state.isLoggedin ? <div>Welcome js</div> : <div>Welcome guest</div>
    )
    // let message;
    // if(this.state.isLoggedin){
    //     message = <div>Welcome js</div>
    // }
    // else{
    //    message = <div>Welcome guest</div>
    // }
    // return <div>{message}</div>
    
    // if(this.state.isLoggedin){
    //     return <div>Welcome js</div>
    // }
    // else{
    //     return <div>Welcome guest</div>
    // }
    // return (
    //   <div>
    //   <div>Welcome js</div>
    //   <div>Welcome guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting
