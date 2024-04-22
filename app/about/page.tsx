import Header from '@/components/Header'
import React from 'react'
import Image from 'next/image'
import { CodingSKills, professionalSkills } from '@/app/data/skills'
import Skill from '@/components/Skill'

type Props = {}

const About = (props: Props) => {
  return (
    <div className=' bg-[#081b29] h-max-screen '>
      <Header />
      <div className='md:h-screen h-max-screen flex flex-col p-5 justify-start mt-20 items-center gap-10 '>
        <h1 className='text-[3em] text-white'>About <span className='text-[#00abf0]'>Me</span></h1>
        <div className='flex items-center justify-start flex-col'>
          <Image
            src={'/coding.jpg'}
            alt={'coding image'}
            width={'100'}
            height={'100'}
            className='rounded-full float-left clear-both h-[200px] w-[200px] object-fill outline-7 outline-[#00abf0] outline outline-offset-4'
          />

          <p className='text-slate-100 text-left p-5 ml-3 mr-3 mt-5 tracking-wider leading-7 w-full rounded-lg'>
          Dynamic and highl motivated skilled Full Stack Developer with 1-2years of experience in designing and developing
scalable web applications. Proficient in both front-end and back-end technologies, seeking a
position to utilize my technical expertise and contribute to the success of your dynamic
organization.
          </p>

        </div>
  
      </div>
    </div>
  )
}

export default About