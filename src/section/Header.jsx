import { motion } from "motion/react";

import github from '../../public/github.svg'
import { Link } from "react-router";

const Header = () => {
	return (
		<motion.section initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="container max-w-126.5 my-39.5!">
			<h1 className="mb-5 text-[44px] leading-[136%] text-(--gray-900) font-bold">Hi, I am Ruslan <br /> Fullstack Developer</h1>
			<p className="mb-9.5 text-(--gray-600)">I'm a full stack developer (React.js & Node.js) </p>
			<button className="text-[20px] mb-12 font-medium rounded-xs hover:rounded-3xl bg-(--gray-200) py-2.25 px-5.25 duration-200 hover:bg-(--gray-900) hover:text-(--gray-50)">Download Resume</button>
			<Link to="https://github.com/ruslansalyukovweb" title="GitHub" target="_blank"><img src={github} alt="" /></Link>
		</motion.section>
	);
}

export default Header;
