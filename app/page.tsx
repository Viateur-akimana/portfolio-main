import About from '@/components/About'
import  Navbar  from '../components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=' bg-gradient-to-br from-[#000000] from-45%  to-[#434343]  h-max-screen'>
      <Navbar />
      <div className='w-full flex h-screen justify-around p-5 items-center'>
        <div className='flex flex-col gap-4 ml-0 md:ml-20 w-full text-center md:text-left md:p-0'>
          <h1 className='text-[#ededed] text-[2em]'>Hi, I am Viateur AKIMANA</h1>
          <h4 className='text-[#00abf0] font-bold tracking-widest text-[1.4em]'>Full-stack engineer</h4>
          <p className='text-[#ededed] text-center tracking-wider md:text-left'>I am a skilled software engineer with a strong foundation in coding and a passion for creating innovative solutions.My proficiency extends to database management, web development, and software testing, ensuring seamless functionality and user satisfaction. Adaptable and detail-oriented, I thrive in collaborative environments where I can leverage my problem-solving skills to overcome complex challenges. Committed to staying at the forefront of technological advancements, I continuously seek opportunities to expand my knowledge and contribute to cutting-edge projects. With a proven track record of delivering high-quality software solutions, I am ready to make a valuable impact in the field of software engineering.</p>
          <div className='flex items-center gap-2'>
            <button className='btn bg-[#00abf0] text-black'>hire me</button>
            <button className='btn text-[#00abf0]'>Contact me</button>
          </div>
        </div>
        <div className='w-full hidden justify-center gap-2 md:flex'>
          <div className='w-[100px] h-[100px] bg-sky-500 rounded-full scale-50'>

          </div>
          <div className='w-[100px] h-[100px] border-4 border-[#00abf0] rounded-full scale-[1.5]'>
          </div>
          <div className='w-[100px] h-[100px] bg-sky-500 rounded-full scale-50'>

          </div>
        </div>
      </div>
      <About/>
    </div>
  )
}
