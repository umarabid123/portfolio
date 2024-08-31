import React from 'react'


const Input = (props) => {
  return (
    <div className={`border rounded-lg p-3 ${props.customClass}`}>
      <input type="text" className='outline-none bg-transparent w-full text-gray-300' placeholder={props.placeholder}  />
    </div>
  )
}

export default Input
