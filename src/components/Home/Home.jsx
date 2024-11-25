import React from 'react'
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";




const Home = () => {
    return (
        <div id='Home' className='h-screen flex flex-col items-center justify-center relative'>
            <h1 className=' uppercase md:text-[140px] text-5xl font-extrabold text-center text-blue-950 drop-shadow-2xl '>wellcome to
            </h1>
            <div className='flex items-center overflow-x-hidden whitespace-nowrap md:text-[120px] text-4xl md:h-64'>
                <h1 className='uppercase font-extrabold text-center text-blue-950'>my &nbsp;</h1>
                <h1 className='uppercase flex  items-center   font-extrabold text-center text-blue-950 animate-typing h-full  overflow-hidden whitespace-nowrap  border-r-4 border-r-white'>portfolio</h1>
            </div>
            <div className=' flex gap-8 mt-6 md;mt-3' >
                <a href='https://github.com/tud-tud' target='_blank' className='bg-white  text-blue-950 md:w-24 md:h-24 w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 hover:text-yellow-500 transition duration-500'>
                    <FaGithub className='md:text-8xl text-5xl' />
                </a>
                <a href='mailto:pornsudayompan@gmail.com' target='_blank'  className='bg-white  text-blue-950 md:w-24 md:h-24 w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 hover:text-yellow-500 transition duration-500'>
                    <SiGmail className='md:text-6xl text-3xl' />
                </a>
            </div>
            
            <div className=' absolute w-[1040px] h-[340px] bg-gradient-to-tr to-[#22e636] from-[#f109e9] via-[#cbc8f8] rounded-full -z-40 blur-3xl animate-home bg-blend-saturation'></div>
            <div className=' absolute w-96 h-96 bg-gradient-to-tr to-[#ee4e0a] from-[#eedb0a] rounded-full -z-40  animate-home delay-1000 blur-lg bg-blend-saturation'></div>
        </div>
    )
}

export default Home