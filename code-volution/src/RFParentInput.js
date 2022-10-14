import React, { Component } from 'react'
import REInput from './REInput';

class RFParentInput extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef();
    }
     clickHandler = ()=>{
        console.log(this.inputRef)
        this.inputRef.current.focus();
    }

    componentDidMount(){
        console.log(this.inputRef)
    }
  render() {
   
    return (
      <div>
        
        < REInput ref={this.inputRef} /> 

        <button onClick={()=>this.clickHandler()}>Click</button>
      </div>
    )
  }
}

export default RFParentInput
