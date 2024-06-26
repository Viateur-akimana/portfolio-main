'use client'

import React from 'react'
import { FaGithub, FaLinkedin, FaSkype, FaGoogle} from 'react-icons/fa'

type Props = {}

const Contacts = (props: Props) => {
  return (

    <div className=' h-max-screen'>
      <div className='h-max-screen md:h-auto flex flex-col p-5 justify-start mt-20 items-center gap-10 text-white text-center'>
        <h1 className='text-[2em] text-white'>Contact <span className='text-[#00baf0]'>Me</span></h1>

        <div className='flex gap-10'>
          <button className='btn bg-[#181717] border-none  hover:border-[#181717]' onClick={()=>window.open('https://github.com/Viateur-akimana/')}><FaGithub /></button>
          <button className='btn bg-[#0077B5]' onClick={() => window.open('https://www.linkedin.com/in/akimana-viateur-704402262/')}><FaLinkedin /></button>
          <button className='btn bg-[#DB4437] border-none' onClick={() => window.open('mailto:akimanaviateur94@gmail.com')}><FaGoogle /></button>
          <button className='btn bg-[#1877F2] border-none' onClick={() => window.open('https://join.skype.com/invite/JDqSWES4dYLn')}><FaSkype /></button>

        </div>
        <div className='flex flex-col gap-5'>
          <div>
            <input placeholder='Enter your name' type='text' name='name' />
            <input placeholder='enter your email' type='email' name='email' />
          </div>
          <input placeholder='Email subject' type='text' name='subject' />
          <textarea placeholder='Your message' rows={10} name='message'>

          </textarea>
          <button className='btn text-black bg-[#00abf0]'>send</button>

        
        
        </div>

      </div>
    </div>
  )
}

export default Contacts