import React, { useState } from 'react'
import loginIcon from '../assets/loginIcon.svg'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section id="login">
      <div className='mx-auto container p-4 rounded-md'>
        <div className='bg-white p-2 py-5 w-full max-w-sm mx-auto '>
          <div className='w-20 h-20 mx-auto border-2 border-green-700 rounded-full '>
            <img alt="profile" src={loginIcon} className='h-full' />
          </div>

          <form>
            <div className='grid pt-2'>
              <label>Email : </label>
              <div className='bg-slate-100 p-2 rounded-xl'>
                <input type='email' placeholder='Enter Email' className='h-full w-full outline-none bg-transparent rounded-xl ' />
              </div>
            </div>
            <div className='pt-2'>
              <label>Password : </label>
              <div className='bg-slate-100 p-2 rounded-xl flex items-center'>
                <input type={showPassword ? 'text' : 'password'} placeholder='Password' className='h-full w-full outline-none bg-transparent rounded-xl ' />
                <div className=' cursor-pointer ' onClick={() => setShowPassword(prev => !prev)}>
                  <span>
                    {showPassword ? (<FaEyeSlash />) : (<FaEye/>)}
                  </span>
                </div>
              </div>
            </div>

            <button className='hover:bg-green-700 bg-green-600 text-white p-2 rounded-md mx-auto block mt-6 max-w-[150px] w-full hover:scale-110 transition-all'>Login</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login