import React,{Component} from "react";

class Message extends Component {

    constructor(){
        super();
        this.state = {
            message : 'welcome visitor'
    }
}
 
changeElement(){
    this.setState({
        message : 'thanks Subs'
    })
}
    render(){
       return(
        <div>
       <h1>{this.state.message}</h1>
       <button onClick={()=>this.changeElement()} >Change message</button>
        </div>
        
       )
    }
}

export default Message;