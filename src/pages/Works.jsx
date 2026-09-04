import { motion } from "motion/react";

const Works = () => {
	return (
		<motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="container mt-10!">
			<div className="">
				<h2 className="text-2xl text-(--gray-600) font-medium">Update projects</h2>
			</div>
		</motion.div>
	);
}

export default Works;
