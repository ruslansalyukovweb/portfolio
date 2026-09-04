const About = () => {
	return (
		<section className="py-16 md:py-20 bg-(--gray-50)">
			<div className="container">
				<div className="text-center bg-(--gray-200) w-max m-auto rounded-xl py-1 px-3">
					<h2 className="text-[14px] leading-[143%] text-(--gray-600) font-medium">About me</h2>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 place-items-center mt-12 gap-12">
					<div className="">
						<p className="text-(--gray-600) font-medium">Photo</p>
					</div>
					<div className="">
						<h2 className="text-[30px] leading-[120%] text-(--gray-900) font-semibold mb-6">Curious about me? Here you have it:</h2>
						<div className="flex flex-col gap-4 text-(--gray-600) leading-[150%]">
							<p>I am a full stack developer, I develop modern web applications and I love creating complete projects — from a well‑thought‑out interface to full‑fledged server logic. </p>
							<p>My main experience is related to React and modern frontend development, as well as backend technologies such as Node.js, Express and MongoDB.</p>
							<p>Thanks to this, I can work on all the main parts of an application: create responsive interfaces, work with databases and link frontend with backend.</p>
							<p>It’s important to me not just to write working code, but to create clear, user‑friendly, and well‑structured applications that are pleasant to use and maintain.</p>
							<p>Right now, I’m also actively studying AI and want to use it not only as a development tool, but also as part of the products themselves.</p>
							<p>I’m interested in integrating AI features into web applications and finding practical ways to make projects smarter and more useful.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
