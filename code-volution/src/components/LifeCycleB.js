import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name : 'ReactJs'
        }
        console.log('lifecycle B constructor')
      }
      
      static getDerivedStateFromProps(props,state){
          console.log('lifecycle B getDrivedStateFromProps');
          return null;
      }
      shouldComponentUpdate(){
          console.log('lifecycle B shouldComponentUpdate');
          return true;
      }
      getSnapshotBeforeUpdate(prevProps,prevState){
          console.log('lifecycle B getSnapshotBeforeUpdate');
          return null;
      }
      componentDidUpdate(prevProps,prevState,prevSnap){
          console.log('lifecycle B componentDidUpdate');
      }
      componentDidMount(){
          console.log('lifecycle B componentDidMount');
          // this.setState({
          //     name : 'Angular'
          // })
      }
  render() {
    console.log('lifecycle b render')
    return (
        
      <div>
       lifecycle b 
      </div>
    )
  }
}

export default LifeCycleB
