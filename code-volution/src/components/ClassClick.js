import React, { Component } from 'react'

class ClassClick extends Component {
    handler(){
        console.log('hhh')
    }
  render() {
    
    return (
      <div>
        <button onClick={this.handler}>Click me</button>
      </div>
    )
  }
}

export default ClassClick
