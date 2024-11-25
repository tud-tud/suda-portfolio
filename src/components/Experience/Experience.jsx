import React from 'react'

import { useInView } from 'react-intersection-observer';

import '../Contact/bgAnimate.css'

const Experience = () => {

    const { ref, inView } = useInView({
        threshold: 0.3,
    })

    return (
        <div ref={ref} id='Experience' className='mb-4   px-10 md:px-40 md:py-8 py-4 flex flex-col mx-auto relative transition duration-300 z-10'>

            <h1 className={`w-full text-start text-transparent md:pl-20 tracking-wider bg-clip-text  bg_aminate mb-4 mt-20 md:mt-20  md:text-[80px] text-5xl font-extrabold ${inView ? " translate-x-0" : " -translate-x-[800px]"} transition duration-1000 ease-in-out`}>Experience</h1>

            <div className='md:pl-52 p-0'>
                <ul className="relative flex flex-col gap-12 py-12 pl-6 text-sm before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 max-w-[800px]"
                >
                    <li
                        className="relative md:pl-6 pl-4 before:absolute before:left-0 before:top-2 before:z-10 before:h-3 before:w-3 before:-translate-x-1/2 before:rounded-full before:bg-blue-800 before:ring-2 before:ring-white"
                    >
                        <div className={`flex flex-col flex-1 ${inView ? "translate-x-0" : "translate-x-[1800px] "} transition duration-1000 delay-100 ease-in-out`}>
                            <h4 className="font-bold md:text-2xl text-xl leading-7 text-blue-800 ">
                                Quality Assurance Engineer &nbsp;
                            </h4>
                            <p className=' pl-2 md:text-xs text-[10px] text-blue-950/60 '>Thai Summit Component Co.,Ltd., Samutprakarn</p>
                            <p className=' pl-3 md:text-xs text-[10px] text-blue-950/60 '>August 2022 - August 2024</p>
                            <ul className={`list-disc pl-8 mt-2 text-blue-950/60 text-xs md:text-lg marker:text-purple-700 md:marker:text-xl  transition duration-700 ease-in-out`}>
                                <li>Inspection and track defect before mass production for new model.</li>
                                <li>Prepare Production Part Approval Process (PPAP) documents and send to customers.</li>
                                <li>Prepare inspection standard and Q-Point.</li>
                                <li>Prepare a work instruction(WI) for measuring Instrument.</li>
                                <li>IMDS system admin and survey hazardous chemical control.</li>
                                <li>Trace back and correct the concerning information for analysis root cause, corrective and preventive action, incase customer complaint and non-conformity product.</li>
                                <li>Prepare report of root cause analysis and corrective and preventive action to customer.</li>
                                <li>Co-Check the parts with the customer.</li>
                            </ul>
                        </div>
                    </li>

                    <li
                        className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-3 before:w-3 before:-translate-x-1/2 before:rounded-full before:bg-blue-800 before:ring-2 before:ring-white"
                    >
                        <div className={`flex flex-col flex-1 ${inView ? "translate-x-0" : "translate-x-[1800px] "} transition duration-1000 delay-200 ease-in-out`}>
                            <h4 className="font-bold md:text-2xl text-xl leading-7 text-blue-800 ">
                                Production Engineer <span className=' hidden md:block'>(Compound Rubber)</span>
                            </h4>
                            <p className=' pl-2 md:text-xs text-[10px] text-blue-950/60 '>Thai Summit Component Co.,Ltd., Samutprakarn</p>
                            <p className=' pl-3 md:text-xs text-[10px] text-blue-950/60 '>May 2022 - August 2022</p>
                            <ul className=' list-disc pl-8 mt-2 text-blue-950/60 text-xs md:text-lg marker:text-purple-700 md:marker:text-xl '>
                                <li>Check properties of compound rubber.</li>
                                <li>Create excel VBA ( Visual Basic for Applications ) to reduce the time of preparing the preparation report.</li>
                                <li>Assist in mixing rubber compounds.</li>
                                <li>Study the analysis of the experimental results.</li>
                            </ul>
                        </div>
                    </li>

                    <li
                        className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-3 before:w-3 before:-translate-x-1/2 before:rounded-full before:bg-blue-800 before:ring-2 before:ring-white"
                    >
                        <div className={`flex flex-col flex-1 ${inView ? "translate-x-0" : "translate-x-[1800px] "} transition duration-1000 delay-300 ease-in-out`}>
                            <h4 className="font-bold md:text-2xl text-xl leading-7 text-blue-800 ">
                                Assistant Engineer(Trainee)
                            </h4>
                            <p className=' pl-2 md:text-xs text-[10px] text-blue-950/60 '>Pacific Rubber Works Company, Chonburi</p>
                            <p className=' pl-3 md:text-xs text-[10px] text-blue-950/60 '>March 2021 - July 2021</p>
                            <ul className=' list-disc pl-8 mt-2 text-blue-950/60 text-xs md:text-lg marker:text-purple-700 md:marker:text-xl '>
                                <li>Check properties of compound rubber.</li>
                                <li>Create excel VBA ( Visual Basic for Applications ) to reduce the time of preparing the preparation report.</li>
                                <li>Assist in mixing rubber compounds.</li>
                                <li>Study the analysis of the experimental results.</li>
                            </ul>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Experience