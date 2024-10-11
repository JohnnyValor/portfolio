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
         id: 13,
         src: scrappmobileapp,
         alt: "Scrapp Mobile App",
         live: "https://www.scrapprecycling.com/demo/scrapp-for-brands-retailers",
         googleStore: "https://play.google.com/store/apps/details?id=com.scrapprecycling.scrapp&hl=en-US&pli=1",
         appleStore: "https://apps.apple.com/us/app/scrapp-recycling-made-simple/id1546625454",
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
                  portfolios.map(({ id, alt, src, code, live, googleStore, appleStore }) => (

                     <div key={id} className='shadow-md shadow-gray-600 rounded-lg flex flex-col justify-between'>
                        <div>
                           <p className=''>{alt}</p>
                           <img src={src} alt={alt} className='rounded-md duration-200 hover:scale-105 w-full h-48 w-50' />
                           <div className="flex items-center justify-center mt-4">
                              {live && (<button
                                 className={`flex-1 px-3 py-0 m-1 duration-200 hover:scale-105 mb-5`}
                              >
                                 <a
                                    href={live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="whitespace-nowrap text-md"
                                 >
                                    Live Demo
                                 </a>
                              </button>)}
                              {code && (
                                 <button className="flex-1 px-3 py-0 m-1 duration-200 hover:scale-105 mb-5">
                                    <a
                                       href={code}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="whitespace-nowrap text-md"
                                    >
                                       Source Code
                                    </a>
                                 </button>
                              )}
                              {googleStore && (
                                 <button className="flex-1 px-3 py-0 m-1 duration-200 hover:scale-105 mb-5">
                                    <a
                                       href={googleStore}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="whitespace-nowrap text-md"
                                    >
                                       Google
                                    </a>
                                 </button>
                              )}
                              {appleStore && (
                                 <button className="flex-1 px-3 py-0 m-1 duration-200 hover:scale-105 mb-5">
                                    <a
                                       href={appleStore}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="whitespace-nowrap text-md"
                                    >
                                       Apple
                                    </a>
                                 </button>
                              )}
                           </div>
                        </div>
                     </div>
                  ))
               }
            </div>
            <div className='mt-12 text-base leading-relaxed px-4 md:px-0'>
               <p className='mb-6'>
                  In my current contract at Scrapp, I advanced from designing login pages and implementing business logic as a junior developer to spearheading the research, development, and implementation of a global mobile notification feature for our business application. This initiative required coordinating multiple teams and meeting a strict four-month deadline. Utilizing TypeScript, Node.js, Express.js, Firebase, Flutter, and Microsoft SQL Server on Azure, we successfully delivered a feature that serves over 250,000 residents.
               </p>
               <p>
                  Additionally, I have taken leadership of the company's Next.js business portal, where I implement new features and lead refactoring efforts to streamline processes and enhance performance. Over the past six months, I have led the migration of the Next.js portal to the Flutter platform, achieving full feature parity with our mobile application and ensuring consistency across all platforms. Furthermore, I have both led and contributed to major UI enhancements and state management refactoring for our mobile application, improving user experience and application performance.
               </p>
            </div>
         </article>
      </section>
   )
}
