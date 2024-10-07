import React from 'react'
import { Child } from './Child'
import img1 from './lufy.jpeg'

export const Parent = () => {
  return (
    <div>
        <Child image={img1} name={"satheeshan"} age={6} />
        <Child image={img1} name={"saadik"} age={12} />
        <Child image={img1} name={"anil"} age={12} />
        <Child image={img1} name={"sivan"} age={12} />
        <Child image={img1} name={"shaji"} age={12} />
        <Child image={img1} name={"sunil"} age={12} />

    </div>
  )
}
