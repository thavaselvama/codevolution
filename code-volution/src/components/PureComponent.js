import React, { PureComponent } from 'react'

 class PureComp extends PureComponent {
  render() {
    console.log('PureComp')
    return (
      <div>
        <h2>Pure component {this.props.name}</h2>
      </div>
    )
  }
}

export default PureComp
