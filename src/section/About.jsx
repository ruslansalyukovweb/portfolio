const About = () => {
	return (
		<section className="py-20 bg-(--gray-50)">
			<div className="container">
				<div className="text-center bg-(--gray-200) w-max m-auto rounded-xl py-1 px-3">
					<h2 className="text-[14px] leading-[143%] text-(--gray-600) font-medium">About me</h2>
				</div>
				<div className="grid grid-cols-2 place-items-center pt-12 gap-12">
					<div className="">
						Photo
					</div>
					<div className="">
						Content
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
