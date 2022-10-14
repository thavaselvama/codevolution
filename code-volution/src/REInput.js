import React from 'react'



const REInput = React.forwardRef((props,ref)=>{
    return(
        <input type='text' ref={ref} />
    )
})

export default REInput
