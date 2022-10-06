import React,{Component} from "react";

class Welcome extends Component{

    constructor(){
        super();
        this.state = {
            student: [
                {
                    name: 'React', id: 1
                },
                {
                    name: 'Angular', id: 2
                },
                {
                    name: 'Express', id: 3
                }
            ]
        }
    }
   
    render(){
        console.log(this.state.student)
        let data =<>
         {this.state.student.map( data=>{
            {JSON.stringify(data)}
           return( <h1>{data.name}</h1>)
         })}
        </>
        return(
            <>
             <h1>Welcome</h1>
       
             {data}
                
            </>
           
        )
    }
}

export default Welcome;