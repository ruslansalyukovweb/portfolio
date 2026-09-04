import { skillsIcon } from "../data/skillsData.js";


const Skills = () => {
	return (
		<section className="container py-16! md:py-20!">
			<div className="text-center bg-(--gray-200) w-max m-auto rounded-xl py-1 px-3 mb-4">
				<h2 className="text-[14px] leading-[143%] text-(--gray-600) font-medium">Skills</h2>
			</div>
			<p className="text-center text-[20px] leading-[140%] text-(--gray-600) mb-12">The skills, tools and technologies I am really good at:</p>
			<div className="flex flex-wrap items-center justify-center gap-15">
				{skillsIcon.map((icon) => {
					return <div key={icon.id} className="inline-flex flex-col items-center gap-2">
						<img className="" src={icon.img}></img>
						<p className='text-(--gray-600)'>{icon.title}</p>
					</div>
				})}
			</div>
		</section>
	);
}

export default Skills;
