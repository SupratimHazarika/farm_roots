import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const InformationBar = ({ content, color }) => {
  return (
    <div className={`h-14 ${color} flex justify-center items-center text-black text-xl font-medium`} >
      {content}
      <div className='text-xl ml-4 p-2 cursor-pointer bg-green-600 text-white rounded-md'>
        <FaWhatsapp />
      </div>
    </div>
  )
}

export default InformationBar