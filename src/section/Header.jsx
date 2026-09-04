import { motion } from "motion/react";
import { Link } from "react-router";

import github from '../../public/github.svg'
import location from './../../public/location.svg'

const Header = () => {
	return (
		<motion.section initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="container max-w-126.5 my-39.5!">
			<div className="max-w-3xl">
				<h1 className="mb-2 text-[36px] md:text-[44px] leading-[136%] text-(--gray-900) font-bold">Hi, I am Ruslan <br /> Fullstack Developer</h1>
				<p className="mb-8 text-(--gray-600)">I'm a full stack developer (React.js & Node.js). I create modern web applications — from the interface to the server side.
					I work with React and Node.js, and I also study AI to integrate intelligent capabilities into my projects. </p>
				<div className="mb-8 flex items-center gap-3">
					<img src={location} alt="icon location" />
					<p className="text-(--gray-600) leading-[150%]">Istanbul, Turkey</p>
				</div>
				<button className="text-[20px] mb-12 font-medium rounded-xs hover:rounded-3xl bg-(--gray-200) py-2.25 px-5.25 duration-200 hover:bg-(--gray-900) hover:text-(--gray-50)">Download Resume</button>
				<Link to="https://github.com/ruslansalyukovweb" title="GitHub" className="block w-max" target="_blank"><img src={github} alt="" /></Link>
			</div>
		</motion.section>
	);
}

export default Header;
