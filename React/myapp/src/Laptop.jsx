import React from 'react'
import img from './lufy.jpeg'

export const Laptop = () => {
  return (
    <div>
        <div className=''>
            <div>
                <h1>Really catch headline here</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eos ipsam rem suscipit sequi, beatae est, veritatis fugit enim qui animi voluptate incidunt repellendus. Possimus perspiciatis minima velit nemo maiores.</p>
                <button>Get started</button>
                <button>Learn more</button>
            </div>
            <div>
                <img src="{img}" alt="laptop" height={200} width={200}/>
            </div>
        </div>
        <div></div>
    </div>
  )
}
