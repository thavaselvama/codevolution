import React, { Component } from 'react'

 class RegComp extends Component {
  render() {
    console.log('regular')
    return (
      <div>
        <h2>Regular component {this.props.name}</h2>
      </div>
    )
  }
}

export default RegComp
