import React from 'react'

function NameList() {
    const name = ['react','node','express','Angular'];
    const nameList =  name.map( name =>{
        return <h2 key={name}>{name}</h2>
      })
  return (
    <div>
      {nameList} {nameList}
    </div>
  )
}

export default NameList
