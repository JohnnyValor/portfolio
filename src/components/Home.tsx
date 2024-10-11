import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-scroll'
import Typewriter from 'typewriter-effect';


export default function Home() {
  return (
    <section id='home' className='home-section h-full w-full bg-gradient-to-b from-black via-black to-gray-800 text-white pt-20  lg:px-12 md:pt-60 text-center md:text-right' >
      <article className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 pt-24 md:flex-row xs:text-center'>
         <div className='flex flex-col justify-center h-full'>
         <h1 className='text-center text-6xl pb-3'>Jonathan Craigmyle</h1>
            <h2 className='text-3xl sm:text-6xl px-4 font-bold text-white text-center'>
            
            <Typewriter
               options={{
                  strings: ['Full-Stack Developer', 'Full-Stack Engineer', 'Relentless Pursuit of Excellence'],
                  autoStart: true,
                  loop: true,
               }}
               />
                           
            
            
            </h2>
            <p className='text-gray-400 py-4 px-4 max-w-xlg self-center text-center sm:text-3xl text-2xl '>I specialize in creating modern applications using a diverse mix of powerful and proven technologies. From building responsive websites to developing full-featured, database-driven solutions, I deliver results that resonate with clients and users alike. </p>
            
            <div className="self-center">
               <Link to={'portfolio'} smooth duration={500}>
               <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md accent-color cursor-pointer md:mb-40 '>
               Portfolio
               <span className='group-hover:rotate-90 duration-300 pl-1'>
                  <BsArrowRight size={20} className='ml-1' />
               </span>               
            </button>
            </Link>
            </div>
         </div>
         <div>
  {/*
            <img src={heroImg} alt="Johnny Valor" className='rounded-2xl mx-auto w-2/3 md:w-full mb-2' />
  */}
         </div>
      </article>      
    </section>
  )
}
