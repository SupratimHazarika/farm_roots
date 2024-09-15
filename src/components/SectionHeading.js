import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const SectionHeading = ({ heading }) => {
  return (
    <div className='p-6 pl-10 '>
        <p className='md:text-lg lg:text-3xl pb-2 cursor-pointer  max-w-60 '>{heading}</p>
    </div>
  )
}

export default SectionHeading