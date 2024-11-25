import React from 'react'
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import Dev from '../../assets/dev.png'

import { InView, useInView } from 'react-intersection-observer';

import './bgAnimate.css';





const contact = () => {

  const { ref, inView } = useInView({
    threshold: 0.8,
  })

  return (
    <div ref={ref} id='Contact' className='h-screen px-10  mx-auto md:px-40 md:py-32 relative flex flex-col justify-center items-center'>
      <div className=' absolute w-96 h-96  bg-[#FA4032] blur-3xl rounded-full bg-blend-saturation animate-con2   '></div>
      <div className=' absolute w-[600px] h-[500px] top-2/4 right-2/4 bg-purple-600 blur-3xl rounded-full -translate-y-2/4 translate-x-2/4 bg-blend-saturation  '></div>
      <div className=' absolute w-96 h-96 top-48 right-96 animate-con2  bg-[#6439FF] blur-3xl rounded-full -translate-y-2/4 translate-x-2/4 bg-blend-saturation  '></div>
      <div className=' absolute w-96 h-96 top-2/4 right-1/4 bg-[#FFC947] blur-3xl  rounded-full -translate-y-2/4  bg-blend-saturation animate-con  '></div>

      <h1 className={`${inView ? " translate-x-0" : "  -translate-x-[2000px]"} transition duration-[1000ms] ease-in-out sm:text-7xl text-5xl  font-bold w-full max-w-[1080px] text-start text-blue-950 mb-6 drop-shadow-2xl  `}>Get In Touch.</h1>
      <div className={`${inView ? " translate-x-0" : "  -translate-x-[2000px]"} transition duration-[1000ms] ease-in-out delay-75 flex justify-between w-4/6 max-w-[990px] h-2/5 border bg-purple-600/15   rounded-3xl shadow-lg`} >
        <div className='hidden md:flex rounded-l-3xl bg-slate-100 overflow-hidden opacity-40'>
          <img src={Dev} alt='dev' className='h-full  object-cover' />
        </div>
        <div className='flex flex-col flex-1 md:m-6 md:pl-4 text-white justify-center sm:items-start items-center gap-3 transition-all duration-500 '>

          <a href='mailto:pornsudayompan@gmail.com' target='_blank'  className='flex gap-2 items-center text-[#ffffff] hover:text-[#d6d7ff]'>
            <MdOutlineMailOutline className='text-3xl  translate-y-[2px]' />
            <p className='text-2xl hidden sm:block'>pornsudayompan@gmail.com</p>
            <p className='text-xl sm:hidden '>pornsudayompan</p>
          </a>

          <a href='' className='flex gap-2 items-center text-[#ffffff] hover:text-[#d6d7ff]'><IoCall className='text-2xl translate-y-[-2px]' /><p className='text-xl'>090-832-8420</p></a>

          <a href='https://www.linkedin.com/in/pornsuda-yompan-618809261' target='_blank' className='flex gap-2 items-center text-[#ffffff] hover:text-[#d6d7ff]'><FaLinkedinIn className='text-2xl  translate-y-[-3px]' /><p className='text-xl'>Linkedin</p></a>

          <a href='https://github.com/tud-tud' target='_blank' className='flex gap-2 items-center text-[#ffffff] hover:text-[#d6d7ff]'><FaGithub className='text-2xl translate-y-[-2px]' /><p className='text-xl'>Github</p></a>

        </div>
      </div>



    </div>
  )
}

export default contact