import React from 'react'


const About = () => {
  return (
    <div id='about'>
      <div className="w-full flex h-screen justify-around items-center">

        <div className="flex flex-col gap-4 ml-0 md:ml-20 w-full md:w-1/2 text-center md:text-left md:p-0">
          <h1 className="text-[#ededed] text-[2em] ml-12">Hi, I am Viateur AKIMANA</h1>
          <h4 className="text-[#00abf0] font-bold tracking-widest text-[1.4em] ml-12">Full-stack engineer</h4>
          <p className="text-[#ededed] tracking-wider md:text-left ml-12">
            I am a skilled software engineer with a strong foundation in coding and a passion for creating innovative solutions. My proficiency extends to database management, web development, and software testing, ensuring seamless functionality and user satisfaction. Adaptable and detail-oriented, I thrive in collaborative environments where I can leverage my problem-solving skills to overcome complex challenges. Committed to staying at the forefront of technological advancements, I continuously seek opportunities to expand my knowledge and contribute to cutting-edge projects. With a proven track record of delivering high-quality software solutions, I am ready to make a valuable impact in the field of software engineering.
          </p>
          <div className="flex items-center justify-center ml-12">
            <button className="btn bg-[#00abf0] text-black ">Hire me</button>
          </div>
        </div>

        <div className="flex items-center justify-center md:w-1/2">
          <div className="w-full h-full max-w-sm aspect-square bg-cover bg-center rounded-full border-4 border-[#00abf0] mr-10"
            style={{ backgroundImage: `url('about.jpg')` }}>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
