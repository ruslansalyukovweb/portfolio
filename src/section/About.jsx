import { motion } from "motion/react";

const About = () => {
	return (
		<motion.div initial={{opacity: 0, x: -30}} animate={{opacity: 1, x: 0}} className="max-w-126.5">
			<h1 className="mb-10 text-[44px] leading-[136%] font-bold">Hi, I am Ruslan, <br /> Fullstack Developer</h1>
			<p className="mb-9.5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
			<button className="text-white text-[20px] font-medium rounded-xs bg-(--primary) py-2.25 px-5.25">Download Resume</button>
		</motion.div>
	);
}

export default About;
