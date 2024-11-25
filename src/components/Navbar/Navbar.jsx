import React, { useState } from 'react'
import Me from "../../assets/profile.jpg"
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";



const Navbar = () => {

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);

  }
  return (
    <nav className='flex justify-between items-center px-10 lg:px-40 py-3   text-main fixed z-50 w-screen  '>
      <div className='flex gap-3 items-center transition-all duration-300'>
        <img src={Me} alt='logo' className=' w-10 rounded-full border md:block hidden' />
        <a href='#Home' ><h1 className='text-blue-950 text-4xl font-extrabold drop-shadow-md'>Suda.</h1></a>
      </div>
      <div className=''>
        <ul className={` hidden md:flex gap-5 text-xl font-semibold text-blue-950/80 transition-all duration-300 `}>
          <a href='#Home'><li className='transition-all duration-300 hover:text-blue-950/60'>Home</li></a>
          <a href='#About'><li className='transition-all duration-300 hover:text-blue-950/60'>About</li></a>
          <a href='#Experience'><li className='transition-all duration-300 hover:text-blue-950/60'>Experience</li></a>
          <a href='#Skills'><li className='transition-all duration-300 hover:text-blue-950/60'>Skill</li></a>
          <a href='#Contact'><li className='transition-all duration-300 hover:text-blue-950/60'>Contact</li></a>
        </ul>

        <ul className={`${menu ? ' translate-x-0' : ' translate-x-[1000px] '} absolute md:hidden  text-blue-50 flex flex-col top-12 text-lg tracking-wide font-bold mt-2  w-2/4 text-start gap-2 bg-blue-950/90 rounded-l-md px-3 py-3 right-0 transition ease-in-out duration-700 `}>
          <a onClick={toggleMenu} href='#Home'><li className='transition-all duration-300 hover:text-blue-950/60'>Home</li></a>
          <a onClick={toggleMenu} href='#About'><li className='transition-all duration-300'>About</li></a>
          <a onClick={toggleMenu} href='#Experience'><li className='transition-all duration-300'>Experience</li></a>
          <a onClick={toggleMenu} href='#Skills'><li className='transition-all duration-300'>Skill</li></a>
          <a onClick={toggleMenu} href='#Contact'><li className='transition-all duration-300'>Contact</li></a>
        </ul>
      </div>



      <button
        onClick={toggleMenu}
        className=' block md:hidden text-blue-900'>{menu ? <AiOutlineClose className=' text-xl' /> : <FiMenu className=' text-xl' />}</button>






    </nav>
  )
}

export default Navbar