import React from 'react'
import Resume from '../../assets/Pornsuda-Resume.pdf'
import { IoMdDownload } from "react-icons/io";

const About = () => {
    return (
        <div id='About' className='px-10 h-screen sm:to-transparent bg-gradient-to-t from-[#093bf1]  via-[#cbc8f8] to-transparent overflow-hidden md:px-40 flex flex-col items-center justify-center transition-all duration-30 z-10'>
            <div className='z-20 flex flex-col items-center max-w-[940px] animate-jump-in animate-duration-[4000ms] animate-ease-in-out'>
                <h1 className='lg:text-[92px] md:text-6xl text-4xl mb-4 font-bold text-center px-auto  text-white/95'>Pornsuda Yompan</h1>

                <div className='text-center text-blue-950/70 md:text-lg text-xs'>
                    <p>I graduated with a Bachelor's Degree in Chemical Engineering from Suranaree University of Technology.</p>
                    <p>I have experience working as a Quality Assurance Engineer in an automotive parts manufacturing.</p>
                    <p>I am looking for a job opportunity in frontend developer, web developer and software developer.</p>
                    <p>I'm learning with myself in HTML, CSS, JavaScript, React.js, Tailwind, Bootstrap, MySQL, and PHP.</p>
                    <p>I'm ready to learning other skill.</p>
                </div>
                <div className='w-full flex flex-row justify-center gap-8 my-9 md:text-2xl text-xl  '>
                    <a href='#Contact'>
                        <button className=' bg-gradient-to-r from-[#b597f6] to-[#fa87bb] border-2 text-blue-50 px-2 md:px-5 py-1 md:py-2 font-bold md:text-xl text-lg rounded-md hover:text-green-50 hover:from-teal-300 hover:to-purple-500 transition ease-in-out duration-1000'>
                            Contact
                        </button>
                    </a>
                    <a href={Resume} download>
                        <button className=' flex gap-2 bg-gradient-to-r to-[#b597f6] from-[#fa87bb] border-2 text-blue-50 px-2 md:px-5 py-1 md:py-2 font-bold md:text-xl text-lg rounded-md hover:text-green-50 hover:to-teal-300 hover:from-purple-500 '>
                             Resume <IoMdDownload className='text-2xl' /> 
                        </button>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default About