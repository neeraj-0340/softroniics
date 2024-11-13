import React, { useContext } from 'react'
import Themecontext from './Themecontext'

export const Newfile = () => {

    const value=useContext(Themecontext)
  return (
    <div className={value.theme==='light'?'dark':'light'}>
        <h2>hi hello</h2>
        <button onClick={value.toggleTheme}>click</button>
    </div>
  )
}
