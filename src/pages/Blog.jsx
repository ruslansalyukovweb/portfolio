import { motion } from "motion/react";

const Blog = () => {
	return (
		<motion.div initial={{opacity: 0, x: -30}} animate={{opacity: 1, x: 0}} className="container mt-10!">
			<h2 className="text-2xl text-(--gray-600) font-medium">Blog, soon</h2>
		</motion.div>
	);
}

export default Blog;
