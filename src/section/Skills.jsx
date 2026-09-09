import { aiSkills, backendSkills, dataSkills, frontendSkills, toolingSkills } from "../data/skillsData.js";


const Skills = () => {
	return (
		<section className="container py-16! md:py-20!">
			<div className="text-center bg-(--gray-200) w-max m-auto rounded-xl py-1 px-3 mb-4">
				<h2 className="text-[14px] leading-[143%] text-(--gray-600) font-medium">Stack</h2>
			</div>
			<p className="text-center text-[20px] leading-[140%] text-(--gray-600) mb-12">The tools I reach for.</p>
			<div className="">
				<ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<li className="p-8 flex flex-col gap-5 bg-(--gray-100) rounded-xl grid md:col-span-2">
						<div className="flex flex-col gap-1">
							<h2 className="text-(--gray-900) font-semibold">AI & Agents</h2>
							<p className="text-sm text-(--gray-700)">Where most of my time goes.</p>
						</div>
						<div className="flex flex-wrap items-center gap-x-6 gap-y-4">
							Skills
						</div>
					</li>
					<li className="p-8 flex flex-col gap-5 bg-(--gray-100) rounded-xl">
						<div className="flex flex-col gap-1">
							<h2 className="text-(--gray-900) font-semibold">Frontend</h2>
							<p className="text-sm text-(--gray-700)">Where most of my time goes.</p>
						</div>
						<div className="flex flex-wrap items-center gap-x-6 gap-y-4">
							{frontendSkills.map((icon) => {
								return <div key={icon.id} className="flex items-center gap-2.5">
									<img className="w-[32px] h-[32px]" src={icon.img} alt="" />
									<h2 className="text-sm text-(--gray-900) font-normal">{icon.title}</h2>
								</div>
							})}
						</div>
					</li>
					<li className="p-8 flex flex-col gap-5 bg-(--gray-100) rounded-xl">
						<div className="flex flex-col gap-1">
							<h2 className="text-(--gray-900) font-semibold">Backend</h2>
							<p className="text-sm text-(--gray-700)">APIs, services, and the real-time bits.</p>
						</div>
						<div className="flex flex-wrap items-center gap-x-6 gap-y-4">
							Skills
						</div>
					</li>
					<li className="p-8 flex flex-col gap-5 bg-(--gray-100) rounded-xl">
						<div className="flex flex-col gap-1">
							<h2 className="text-(--gray-900) font-semibold">Data</h2>
							<p className="text-sm text-(--gray-700)">Relational when it should be, document when it shouldn't.</p>
						</div>
						<div className="flex flex-wrap items-center gap-x-6 gap-y-4">
							Skills
						</div>
					</li>
					<li className="p-8 flex flex-col gap-5 bg-(--gray-100) rounded-xl">
						<div className="flex flex-col gap-1">
							<h2 className="text-(--gray-900) font-semibold">Design & Tooling</h2>
							<p className="text-sm text-(--gray-700)">Build it, document it, test it, ship it.</p>
						</div>
						<div className="flex flex-wrap items-center gap-x-6 gap-y-4">
							Skills
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Skills;
