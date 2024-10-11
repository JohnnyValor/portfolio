import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineDocumentText } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { SiCodewars } from 'react-icons/si';

export default function SocialLinks() {

const links = [
   {
      id: 1,
      child: (
         <> LinkedIn <FaLinkedin size={30} />  
         </>
      ),
      href: 'https://www.linkedin.com/in/jonathan-craigmyle/',
      style: 'rounded-tr-md'
   },
   {
      id: 2,
      child: (
         <> Github <FaGithub size={30} />  
         </>
      ),
      href: 'https://github.com/JohnnyValor',
   },
   {
      id: 3,
      child: (
         <> Mail <HiOutlineMail size={30} />  
         </>
      ),
      href: 'mailto:jonathan.craigmyle@gmail.com'
   },
   {
      id: 4,
      child: (
         <> Referrals <HiOutlineDocumentText size={30} />  
         </>
      ),
      href: 'https://github.com/JohnnyValor/recommendations/blob/main/allRecommendations.jpg',
   },
   
   {
      id: 5,
      child: (
         <> Resume <BsFillPersonLinesFill size={30} />  
         </>
      ),
      href: 'https://github.com/JohnnyValor/jonathan_craigmyle_resume_012524/blob/main/JCFSEResume.pdf',
      style: 'rounded-br-md',
      download: true,
   }
]

  return (
    <section className='hidden lg:flex flex-col top-[35%] left-0 fixed '>
      <ul>
      {links.map(({ id, child, href, style, download }) => (
         <li key={id}
            // eslint-disable-next-line no-useless-concat
            className={"flex justify-between items-center w-36 h-12 px-3 bg-accent ml-[-90px] hover:ml-[-1px] hover:rounded-md duration-300" + " " + style}>
            <a href={href} 
               className='flex justify-between items-center text-white w-full'
               download={download}
               target='_blank'
               rel='noreferrer'
            >
               {child}
            </a>
         </li>
      ))}       
      
      </ul>
   </section>
  );
}
