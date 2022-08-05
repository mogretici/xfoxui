import React from 'react'

import { Button } from 'foxui'
import 'foxui/dist/index.css'

const App = () => {
  return (
    <div>
    <Button type='primary' onClick={()=>alert("https://github.com/mogretici/xfoxui")} text="Click Me" /> <br />
    <Button type='secondary' onClick={()=>alert("https://github.com/mogretici/xfoxui")} text="Click Me" /> <br />
    <Button type='dashed' onClick={()=>alert("https://github.com/mogretici/xfoxui")} text="Click Me" /> <br />
    <Button type='link' onClick={()=>alert("https://github.com/mogretici/xfoxui")} text="Click Me" /> <br />

    </div>
  )
}

export default App
