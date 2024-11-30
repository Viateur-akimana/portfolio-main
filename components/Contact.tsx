'use client'

import React from 'react'
import { FaGithub, FaLinkedin, FaSkype, FaGoogle, FaTwitter, FaWhatsapp } from 'react-icons/fa'

type Props = {}

const Contacts = (props: Props) => {
  return (

    <div className=' h-max-screen' id='contact'>
      <div className='h-max-screen md:h-auto flex flex-col p-5 justify-start mt-20 items-center gap-10 text-white text-center'>
        <h1 className='text-[2em] text-white'>Get in touch with <span className='text-[#00baf0]'>Me</span></h1>

        <div className='flex flex-cols space-x-20'>
          <div className='gap-10 flex-start'>
            <button className='btn bg-[#181717] border-none  hover:border-[#181717]' onClick={() => window.open('https://github.com/Viateur-akimana/')}><FaGithub /></button>
            <button className='btn bg-[#0077B5]' onClick={() => window.open('https://www.linkedin.com/in/akimana-viateur-704402262/')}><FaLinkedin /></button>
            <button className='btn bg-[#DB4437] border-none' onClick={() => window.open('mailto:akimanaviateur94@gmail.com')}><FaGoogle /></button>
            <button className='btn bg-[#1877F2] border-none' onClick={() => window.open('https://join.skype.com/invite/JDqSWES4dYLn')}><FaSkype /></button>
            <button className='btn bg-[#1DA1F2] border-none' onClick={() => window.open('https://join.skype.com/invite/JDqSWES4dYLn')}><FaTwitter /></button>
            <button
              className='btn bg-[#25D366] border-none'
              onClick={() => window.open('https://wa.me/yourphonenumber')}
            >
              <FaWhatsapp />
            </button>

          </div>
          <div className='flex flex-col flex-end'>
            <div>
              <input placeholder='Enter your name' type='text' name='name' className='bg-zinc-700' />
              <input placeholder='Enter your email' type='email' name='email' className='bg-zinc-700' />
            </div>
            <input placeholder='Email subject' type='text' name='subject' className='bg-zinc-700' />
            <textarea placeholder='Your message' rows={6} name='message' className='bg-zinc-700'>

            </textarea>
            <button className='btn text-black bg-[#1aa8e0] transition-colors hover:bg-[#1aa8e0]'>send</button>



          </div>

        </div>
      </div>
    </div>
  )
}

export default Contacts