import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor({name}) {
      super(name)
    console.log(name)
      this.state = {
         name : 'ReactJs'
      }
      console.log('lifecycle A constructor');

      this.clickHandler = this.clickHandler.bind(this)
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('lifecycle A getDrivedStateFromProps');
        return null;
    }
    shouldComponentUpdate(){
        console.log('lifecycle A shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('lifecycle A getSnapshotBeforeUpdate');
        return null;
    }
    componentDidUpdate(prevProps,prevState,prevSnap){
        console.log('lifecycle A componentDidUpdate');
    }
    componentDidMount(){
        console.log('lifecycle A componentDidMount');
        // this.setState({
        //     name : 'Angular'
        // })
    }
    clickHandler(){
        this.setState({
            name : "hello"
        })
    }
  render() {
    console.log('lifecycle A render')
    return (
        
      <div>
       <div>LifeCycleA</div>
       <button onClick={this.clickHandler}>Click</button>
< LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA
