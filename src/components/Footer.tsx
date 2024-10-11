import React from 'react'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs';

export default function Footer() {
	return (
		<footer>
			<article className="footer bg-gradient-to-b to-gray-800 from-black text-white  lg:px-12">

				<h3 className='font-bold'>Contact me!</h3>
				<a href="mailto:jonathan.craigmyle@gmail.com" className="footer_link  md:text-2xl ">jonathan.craigmyle@gmail.com</a>
				<ul className="social-list my-4">
					<li className="social-list_item md:px-4">
						<a className="social-list_link"
							href="https://github.com/JohnnyValor/jonathan_craigmyle_resume_012524/blob/main/JCFSEResume.pdf"
							download={true}
							rel="noreferrer"
							target='_blank'
						>
							<BsFillPersonLinesFill size={40} />
						</a>
					</li>
					<li className="social-list_item">
						<a className="social-list_link" href="https://www.linkedin.com/in/jonathan-craigmyle/" target="_blank" rel="noreferrer">
							<FaLinkedin size={40} />
						</a>
					</li>
					<li className="social-list_item md:px-4">
						<a className="social-list_link" href="https://github.com/JohnnyValor" target="_blank" rel="noreferrer">
							<FaGithub size={40} />
						</a>
					</li>
				</ul>

				<div className="final">
					<small><span>&copy;</span> <strong> Jonathan Craigmyle / Johnny Valor </strong></small>
				</div>
			</article>

		</footer>
	)
}
