import React from 'react'
import { useState } from 'react'
import Themecontext from './Themecontext'

export const Contextprovider = ({children}) => {

    const[theme,setTheme]=useState('light');

    const toggleTheme=()=>{
        setTheme(theme==='light'?'dark':'light');
    }
  return (
    <div>
        <Themecontext.Provider value={{theme,toggleTheme}}>
            {children}
        </Themecontext.Provider>
    </div>
  )
}
