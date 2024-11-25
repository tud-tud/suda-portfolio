import React from 'react'
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { FaPhp } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbLivePhoto } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { VscGithub } from "react-icons/vsc";

import calculate from '../../assets/project/calculator.png'
import weather from '../../assets/project/weather.png'
import todoPhp from '../../assets/project/todo-php.png'
import school from '../../assets/project/school-management-php.png'
import todoReact from '../../assets/project/todo-react.png'

import { useInView } from 'react-intersection-observer';


const Skill = () => {

    const { ref, inView } = useInView({
        threshold: 0.5,
    })

    const skills = [
        {
            name: "HTML",
            icon: <AiFillHtml5 />,
            color: 'bg-orange-600',
            ic_style: "translate-y-1"
        },
        {
            name: "CSS",
            icon: <IoLogoCss3 />,
            color: 'bg-blue-600',
            ic_style: "scale-95 "
        },
        {
            name: "JavaScript",
            icon: <RiJavascriptFill />,
            color: 'bg-yellow-500 ',
            ic_style: ""
        },
        {
            name: "Tailwild",
            icon: <RiTailwindCssFill />,
            color: 'bg-cyan-500',
            ic_style: "-translate-y-1"
        },
        {
            name: "Bootstrap",
            icon: <FaBootstrap />,
            color: 'bg-purple-700',
            ic_style: ""
        },
        {
            name: "React",
            icon: <IoLogoReact />,
            color: 'bg-sky-400',
            ic_style: ""
        },
        {
            name: "PHP",
            icon: <FaPhp />,
            color: 'bg-violet-700',
            ic_style: ""
        },
        {
            name: "MySQL",
            icon: <GrMysql />,
            color: 'bg-blue-800',
            ic_style: "scale-75 "
        },
        {
            name: "Postman",
            icon: <SiPostman />,
            color: 'bg-black',
            ic_style: "text-orange-500"
        },
        {
            name: "Vscode",
            icon: <VscVscode />,
            color: 'bg-black',
            ic_style: "text-sky-500"
        },
        {
            name: "GitHub",
            icon: <VscGithub />,
            color: 'bg-black',
            ic_style: "text-white  "
        },
    ]


    const showSkill = skills.map((value, index) =>

        <div key={index}
            className={`hover:w-64 w-20 h-20 overflow-hidden  rounded-full ${value.color} flex items-center text-white transition-all  duration-500 animate-bounce hover:animate-none shadow-2xl shadow-orange-950  hover:justify-center`} >
            <div className={`flex items-center text-6xl justify-center ${value.ic_style}  pl-[10px] `} >{value.icon}</div>
            <h2 className=' text-3xl pl-4'>
                {value.name}
            </h2>
        </div>
    )




    return (
        <div ref={ref} id='Skills' className=' px-10 md:px-40 md:py-8 py-4 flex flex-col mx-auto my-8 relative transition  duration-300 '>
            <div className='mt-10'>
                <h1 className={`sm:text-8xl text-5xl  sm:mt-20 font-extrabold my-6 text-blue-950 text-center mb-10   ${inView ? " animate-flip-up animate-duration-[1000ms] animate-ease-in" : " opacity-0"}`}>My Skills</h1>
                <div className={`flex flex-wrap gap-6 justify-center`}>
                    {showSkill}
                </div>
            </div>
            <div className=' mt-10 '>
                <h1 className=' text-5xl font-bold my-6 text-blue-950 text-center md:text-6xl '>My Projects</h1>
                <div className=' flex gap-6 pb-8 scroll-smooth overflow-scroll scroll-p-4 snap-mandatory'>

                    <div className=' border border-slate-400 max-w-96 min-w-80  rounded-xl flex flex-col items-center snap-start shadow-md'>
                        <h3 className='mt-3 font-extrabold tracking-wider text-blue-900 text-center text-2xl w-full '>Weather-React</h3>
                        <img className='p-2 my-2 rounded-2xl h-64' src={weather} alt='project' />
                        <div className='flex justify-around w-full my-3'>
                            <a
                                href='https://github.com/tud-tud/wether-react-js.git'
                                target='_blank'
                                className=' bg-black py-2 px-4 text-white rounded-md flex  items-center  gap-2 hover:bg-gradient-to-tr hover:from-purple-600 hover:to-blue-300' >
                                <FaGithub className='tect-2xl' /> GitHub
                            </a>
                            <a
                                href='https://wether-react-js.netlify.app'
                                target='_blank'
                                className='bg-[#603deb]  py-2 px-4 text-white rounded-md flex  items-center  gap-2 hover:bg-gradient-to-tr hover:from-purple-600 hover:to-blue-300'><TbLivePhoto /> Demo
                            </a>
                        </div>
                    </div>

                    <div className=' border border-slate-400 max-w-96 min-w-80  rounded-xl flex flex-col items-center snap-start shadow-md'>
                        <h3 className='mt-3 font-extrabold tracking-wider text-blue-900 text-center text-2xl w-full'>Calculator-React</h3>
                        <img className='p-2 my-2  rounded-2xl h-64' src={calculate} alt='calculator' />
                        <div className='flex justify-around w-full my-3'>
                            <a
                                href='https://github.com/tud-tud/calculator-app.git'
                                target='_blank'
                                className=' bg-black py-2 px-4 w-full mx-20 mb-5 text-white text-2xl rounded-md flex  items-center justify-center   gap-2 hover:bg-gradient-to-tr hover:from-purple-600 hover:to-blue-300' >
                                <FaGithub className='tect-2xl' /> GitHub
                            </a>
                            
                        </div>
                    </div>

                    <div className=' border border-slate-400 max-w-96 min-w-80  rounded-xl flex flex-col items-center snap-start shadow-md'>
                        <h3 className='mt-3 font-extrabold tracking-wider text-blue-900 text-center text-2xl w-full'>Todo-React</h3>
                        <img className='p-2 my-2  rounded-2xl h-64' src={todoReact} alt='calculator' />
                        <div className='flex justify-around w-full my-3'>
                            <a
                                href='https://github.com/tud-tud/todo-raect-js.git'
                                target='_blank'
                                className=' bg-black py-2 px-4 text-white rounded-md flex  items-center  gap-2 hover:bg-gradient-to-tr hover:from-purple-600 hover:to-blue-300' >
                                <FaGithub className='tect-2xl' /> GitHub
                            </a>
                            <a
                                href='https://to-do-re-js.netlify.app'
                                target='_blank'
                                className='bg-[#603deb]  py-2 px-4 text-white rounded-md flex  items-center  gap-2 hover:bg-gradient-to-tr hover:from-purple-600 hover:to-blue-300'>
                                <TbLivePhoto /> Demo
                            </a>
                        </div>
                    </div>

                    <div className=' border border-slate-400 max-w-96 min-w-80  rounded-xl flex flex-col items-center snap-start shadow-md'>
                        <h3 className='mt-3 font-extrabold tracking-wider text-blue-900 text-center text-2xl w-full '>Todo-PHP</h3>
                        <img className='p-2 my-2  rounded-2xl h-64' src={todoPhp} alt='TodoPHP' />
                        <div className='flex justify-around w-full my-3'>
                            <a
                                href='https://github.com/tud-tud/todo_list_php.git '
                                target='_blank'
                                className=' bg-black py-2 px-4 w-full mx-20 mb-5 text-white text-2xl rounded-md flex  items-center justify-center   gap-2 hover:bg-gradient-to-tr hover:from-purple-600 hover:to-blue-300' >
                                <FaGithub className='tect-4xl' /> GitHub
                            </a>
                        </div>
                    </div>

                    <div className=' border border-slate-400 max-w-96 min-w-80  rounded-xl flex flex-col items-center snap-start shadow-md'>
                        <h3 className='mt-3 font-extrabold tracking-wider text-blue-900 text-center text-2xl w-full '>School management-PHP</h3>
                        <img className='p-2 my-2  rounded-2xl h-64' src={school} alt='School management-php' />
                        <div className='flex justify-around w-full my-3'>
                            <a
                                href='https://github.com/tud-tud/school-management-php.git'
                                target='_blank'
                                className=' bg-black py-2 px-4 w-full mx-20 mb-5 text-white text-2xl rounded-md flex  items-center justify-center   gap-2 hover:bg-gradient-to-tr hover:from-purple-600 hover:to-blue-300' >
                                <FaGithub className='tect-4xl' /> GitHub
                            </a>
                        </div>
                    </div>








                </div>
            </div>

        </div>
    )
}

export default Skill