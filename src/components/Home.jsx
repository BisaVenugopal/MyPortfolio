import React from 'react'
import mypic from '../assets/myImage11.jpg'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div name="home" className='h-screen  w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20 '>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
            <p className='text-gray-500 py-4 max-w-md'> As a passionate fresher in full-stack development, I have built diverse projects including an e-commerce app, a movie streaming site, and a real estate application using React, Node.js, HTML, and Tailwind CSS. Proficient in .NET MVC, I have also explored machine learning through minor projects. With familiarity in GitHub and MongoDB, I am well-equipped for collaborative and data-driven development. Eager to contribute to impactful projects in the tech industry.</p>
            <div>
                <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    Portfolio<span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25} className='ml-1'/></span>
                </Link>
            </div>
        </div>
        <div>
            <img src={mypic} alt='My Profile' className='rounded-2xl mx-auto w-2/3 md:w-full pt-10'/>
        </div>
      </div>
        
    </div>
  )
}

export default Home
