import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : 'Hello React'
      }
    }
    changeMessage(){
        // this.setState({
        //     message : 'hello express'
        // })


    console.log(this)

  
    }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={this.changeMessage}>Clicked</button>
      </div>
    )
  }
}

export default EventBind
