import React, { Component } from 'react'

 class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count :0
      }
    }
    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    increment(){
        // this.setState({
        //     count : this.state.count +1
        // })


        this.setState( (pre)=>({
            count : pre.count +1
        }),()=>{
            console.log(this.state.count)
        })
        
    }
    myfunction(){
        console.log(this.state)
    }
  render() {
    return (
        <div>
            <div>
                count - {this.state.count}
            </div>
            <button onClick={()=> this.incrementFive()}>increment </button>
        </div>
      
    )
  }
}

export default Counter
