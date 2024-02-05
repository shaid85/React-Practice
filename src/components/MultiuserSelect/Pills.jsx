import React from 'react'

const Pills = ({image, text, onClick}) => {
  return <div className="inline-block mr-1" onClick={onClick}>
    <span className='h-5 bg-slate-950 text-white rounded-2xl flex items-center gap-3 px-5 py-5 cursor-pointer border-b border-solid border-slate-800 last:border-0 hover:bg-slate-400'>
    <img src={image} alt={text} className=' h-6'/>
    <span>{text} &times;</span>
  </span>
  </div>
}

export default Pills