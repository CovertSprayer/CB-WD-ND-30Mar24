import React from 'react'

const Input = ({onChangeHandler= null, title, name, type="text"}) => {
  return (
    <div className='mb-3'>
      <div className='font-semibold mb-2'>{title}</div>
      <input name={name} onChange={(e) => onChangeHandler(e)} className='outline-1 outline-gray-300 rounded-lg w-full p-2 focus:ring-2 focus:ring-[#2F3AB2]' type={type} />
    </div>
  )
}

export default Input