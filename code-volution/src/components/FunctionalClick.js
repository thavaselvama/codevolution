import React from 'react'

function FunctionalClick() {
  const handler = ()=>{
    console.log('jjj')
  }
  return (
    <div>
      <button onClick={()=>handler()}>Click</button>
    </div>
  )
}

export default FunctionalClick
