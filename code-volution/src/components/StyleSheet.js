import React, { useState } from 'react'

import './MyStyle.css'
function StyleSheet() {
    const [data,setData] = useState(true);
    const [cls,setCls] = useState(false
        );
   return (
    <div>
      <h2 className={"btn-group " + (data && cls  ? 'primary' : 'hidden')}>Stylesheet</h2>
    </div>
  )
}

export default StyleSheet
