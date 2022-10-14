import React, { Component } from 'react'
import MemoComp from './components/MemoComp'
import PureComp from './components/PureComponent'
import RegComp from './RegComp'

class ParentCompo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "React"
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name : 'React'
            })
        },3000)
    }
  render() {
    console.log('ParentCompo')
    return (
      <div>
        <h2>Parent component</h2>
        {/* < RegComp name={this.state.name} />
        < PureComp name={this.state.name} /> */}

        <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentCompo
