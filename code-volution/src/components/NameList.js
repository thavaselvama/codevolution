import React, { useState } from 'react'

function NameList() {
    
    const [name,setName] = useState(['react','node','express','Angular'])
    const nameList =  name.map( name =>{
        return <h2 key={name}>{name}</h2>
      })

      const deleteName = ()=>{
      console.log('kk')
        name.splice(0,1);
        console.log(name)
        setName([...name])
    
      }
  return (
    <div>
      {nameList}

      <button onClick={deleteName}>Delete</button>
    </div>
  )
}

export default NameList
