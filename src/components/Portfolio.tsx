import React from 'react'

import foxriverdaylilies from '../assets/foxriverdaylilies.png'
import pottershouse from '../assets/pottershouse.png'
import scrappwebportal from '../assets/scrappWebPortal.png'
import scrappmobileapp from '../assets/scrappMobileApp.png'

// eslint-disable-next-line no-lone-blocks

export default function Portfolio() {

   const portfolios = [
      {
         id: 10,
         src: pottershouse,
         alt: "Responsive Client Website",
         code: "https://github.com/thepottershouse/thepottershouse.github.io",
         live: "https://thepottershouse.github.io/"
      },
      // {
      //    id: 11,
      //    src: foxriverdaylilies,
      //    alt: "E-Commerce Client Website",
      //    code: "https://github.com/JohnnyValor/foxriverdaylilies-store",
      //    live: "https://foxriverdaylilies.com/"
      // },
      {
         id: 12,
         src: scrappwebportal,
         alt: "Scrapp Web Portal",
         live: "https://www.scrapprecycling.com/demo/scrapp-for-brands-retailers",
      },
      {
         id: 12,
         src: scrappmobileapp,
         alt: "Scrapp Mobile App"
         live: "https://www.scrapprecycling.com/demo/scrapp-for-brands-retailers",
      },
   ]

  return (
    <section id="portfolio" className='bg-gradient-to-b to-black from-gray-800 w-full text-white md:h-full  pt-16 pb-20 lg:px-12'>
      <article className='max-w-screen-lg p-4 pt-10 mx-auto flex flex-col justify-center w-full h-full '>
         <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>Portfolio</p>            
         </div>
         <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm: px-2  md:px-8 m-1' >

         {
            portfolios.map(({ id, alt,  src, code, live }) => (
               
                  <div  key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                     <div>
                        <p className=''>{alt}</p>
                        <img src={src} alt={alt} className='rounded-md duration-200 hover:scale-105 w-full h-48 object-cover'/>
                        <div className='flex items-center justify-center'>
                           <button className='w-1/2 px-6 py-0 m-1 duration-200 hover:scale-105'><a href={live} target="_blank" rel="noopener noreferrer">Live Demo</a></button>
                           <button className='w-1/2 px-6 py-0 m-1 duration-200 hover:scale-105'><a href={code} target="_blank" rel="noopener noreferrer">Source Code</a></button>
                        </div>
                     </div>
                  </div>               
               ))
            }
         </div>         
      </article>
    </section>
  )
}
