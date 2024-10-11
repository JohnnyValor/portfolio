import React from 'react'
import css from '../assets/css.png'
import github from '../assets/github.png'
import reactImg from '../assets/react.png'
import html from '../assets/html.png'
import tailwind from '../assets/tailwind.png'
import javascript from '../assets/javascript.png'
import nextjs from '../assets/nextjs.png'
import node from '../assets/node.png'
import express from '../assets/express2.png'
import sass from '../assets/sass.png'
import mongo from '../assets/mongodb.png'
import mui from '../assets/MUI.svg'
import postman from '../assets/postman.png'
import vscode from '../assets/vscode.png'
import vercel from '../assets/vercel.png'
import heroku from '../assets/heroku.png'
import typescript from '../assets/typescript.png'
import angular from '../assets/angular.png'
import styledComponents from '../assets/styledComponents.png'
import jquery from '../assets/jquery.webp'
import visualStudio from '../assets/visualStudio.png'
import csharp from '../assets/csharp.png'
import net from '../assets/net.png'
import postgres from '../assets/postgres.png'
import sqlite from '../assets/sqlite.png'
import microsoftsql from '../assets/microsoftsql.png'
import microsoftazure from '../assets/microsoftazure.png'
import photo from '../assets/profile2.jpg'
import swagger from '../assets/swagger.png'

export default function About2() {
  return (
    <section id="about" className='w-full h-full bg-gradient-to-b to-gray-800 from-black text-white pt-24 pb-20 lg:px-12 '>

      <article className='max-w-screen-lg p-4 mx-auto  justify-center w-full h-full  '>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <div className='about2-top flex gap-5 mx-auto pr-40 justify-center content-center'>
          <img src={photo} className="selfie" alt="Jonathan Craigmyle" />


          <div className='flex technology-wrapper flex-col gap-3'>
            <p>Front End Technologies:</p>
            <div className='technology-icons flex'>

              <div className="tooltip">
                <img src={html} className='tooltipicon' alt="html badge" />
                <span className='tooltiptext'>HTML</span>
              </div>
              <div className="tooltip">
                <img src={css} alt="css badge" />
                <span className='tooltiptext'>CSS</span>
              </div>
              <div className='tooltip'>
                <img src={javascript} alt="javascript badge" />
                <span className='tooltiptext'>JavaScript</span>
              </div>
              <div className="tooltip">
                <img src={typescript} alt="typescript badge" />
                <span className='tooltiptext'>TypeScript</span>
              </div>
              <div className="tooltip">
                <img src={jquery} alt="jquery badge" />
                <span className='tooltiptext'>jQuery</span>
              </div>
              <div className="tooltip">
                <img src={reactImg} alt="react badge" />
                <span className='tooltiptext'>React</span>
              </div>
              <div className="tooltip">
                <img src={angular} alt="angular badge" />
                <span className='tooltiptext'>Angular</span>
              </div>
              <div className='tooltip'>
                <img src={nextjs} alt="nextjs badge" />
                <span className='tooltiptext'>Next.js</span>
              </div>
              <div className="tooltip">
                <img src={tailwind} alt="tailwind badge" />
                <span className='tooltiptext'>Tailwind</span>
              </div>
              <div className="tooltip">
                <img src={mui} alt="mui badge" />
                <span className='tooltiptext'>Material UI</span>
              </div>
              <div className="tooltip">
                <img src={styledComponents} alt="styledComponents badge" />
                <span className='tooltiptext'>Styled Components</span>
              </div>
              <div className="tooltip">
                <img src={sass} alt="sass badge" />
                <span className='tooltiptext'>Sass</span>
              </div>


            </div>
            <p>Back End Technologies:</p>
            <div className='technology-icons flex'>


              <div className="tooltip">
                <img src={node} alt="node badge" />
                <span className='tooltiptext'>Node.js</span>
              </div>
              <div className="tooltip">
                <img src={express} alt="express badge" />
                <span className='tooltiptext'>Express</span>
              </div>
              <div className="tooltip">
                <img src={csharp} alt="csharp badge" />
                <span className='tooltiptext'>C#</span>
              </div>
              <div className="tooltip">
                <img src={net} alt="net badge" />
                <span className='tooltiptext'>.NET</span>
              </div>
              <div className="tooltip">
                <img src={microsoftazure} alt="microsoft azure badge" />
                <span className='tooltiptext'>Microsoft Azure</span>
              </div>
              <div className="tooltip">
                <img src={microsoftsql} alt="microsoft badge" />
                <span className='tooltiptext'>Microsoft SQL Server</span>
              </div>
              <div className="tooltip">
                <img src={postgres} alt="postgres badge" />
                <span className='tooltiptext'>PostgreSQL</span>
              </div>
              <div className="tooltip">
                <img src={sqlite} alt="sqlite badge" />
                <span className='tooltiptext'>SQLite</span>
              </div>
              <div className="tooltip">
                <img src={mongo} alt="mongo badge" />
                <span className='tooltiptext'>MongoDB</span>
              </div>

            </div>
            <p>Tools:</p>
            <div className='technology-icons flex'>

              <div className="tooltip">
                <img src={github} alt="github badge" />
                <span className='tooltiptext'>GitHub</span>
              </div>
              <div className="tooltip">
                <img src={visualStudio} alt="visualStudio badge" />
                <span className='tooltiptext'>Visual Studio</span>
              </div>
              <div className="tooltip">
                <img src={vscode} alt="vscode badge" />
                <span className='tooltiptext'>VS Code</span>
              </div>
              <div className="tooltip">
                <img src={postman} alt="postman badge" />
                <span className='tooltiptext'>Postman</span>
              </div>
              <div className="tooltip">
                <img src={swagger} alt="swagger badge" />
                <span className='tooltiptext'>Swagger</span>
              </div>
              <div className="tooltip">
                <img src={vercel} alt="vercel badge" />
                <span className='tooltiptext'>Vercel</span>
              </div>
              <div className="tooltip">
                <img src={heroku} alt="heroku badge" />
                <span className='tooltiptext'>Heroku</span>
              </div>

            </div>

          </div>
        </div>
        <div className='px-4'>
          <p className='text-1xl mt-5 leading-2'>
            I am a former owner of a painting company of 20+ years. I have turned my passion for excellence towards software development and engineering. I have a strong leadership background and naturally build relationships with everyone through empathy, good and bad humor (dad jokes!), and a deep desire to see those around me grow and succeed.
          </p>
          <p className='text-1xl mt-5 leading-2'>In essence, I thrive on challenges, excel as a collaborative team player, adopt a supportive leadership approach, and remain committed to continual learning.</p>
          <p className='text-1xl mt-5 leading-2'>In my day to day, I am a father of two toddlers and husband to a wonderful wife. I enjoy wrestling my kids, playing and watching sports (Go Bears! Go Hawks!), forever D&D DM for my friends, reading a good book and playfully annoying my wife enough to let her know I still adore her.</p>
          <br />
          <p className='text-1xl mt-5 leading-2 inline'>I am currently open to freelance, contract, and full time work. </p>
        </div>
      </article>
    </section>
  )
}
