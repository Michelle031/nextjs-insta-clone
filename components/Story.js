import React from 'react'

function Story({img, username}) {
  return (
    <div>
        <img className='w-14 rounded-full p-[2px] border-2 border-red-500 object-cover cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src={img} alt="img" />
        <p className='text-xs w-12 truncate text-center '>{username}</p>
    </div>
  )
}

export default Story