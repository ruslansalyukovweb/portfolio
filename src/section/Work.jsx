import { worksData } from "../data/workData";

const Work = () => {
	return (
		<section className="py-16! md:py-20! ">
			<div className="container">
				<div>
					<div className="text-center bg-(--gray-200) w-max m-auto rounded-xl py-1 px-3 mb-4">
						<h2 className="text-[14px] leading-[143%] text-(--gray-600) font-medium">Work</h2>
					</div>
					<p className="text-center text-[20px] leading-[140%] text-(--gray-600) mb-12">Some of the noteworthy projects I have built:</p>
					<div className="flex flex-col gap-12">
						{worksData.map((work) => {
							return <div key={work.id} className="grid grid-cols-1 lg:grid-cols-2 place-items-center shadow-[0_2px_2px_0_rgba(0,0,0,0.06)] drop-shadow-md bg-(--gray---default) rounded-xl">
								<div className="bg-(--gray-50) min-h-full flex items-center justify-center p-[clamp(2rem,1.667rem+1.67vw,3rem)] w-full max-[767px]:rounded-t-xl sm:rounded-l-xl">
									<img src={work.img} className="rounded-xl" alt="" />
								</div>
								<div className="grid place-self-start p-8 md:p-12">
									<h2 className="text-[20px] leading-[140%] text-(--gray-900) font-semibold mb-6">{work.title}</h2>
									<p className="leading-[150%] text-(--gray-600) mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
									<div className="flex flex-wrap items-center gap-2 mb-6">
										<div className="py-1 px-5 text-(--gray-600) leading-[143%] text-sm font-medium bg-(--gray-200) rounded-xl">{work.tags.tag1}</div>
										<div className="py-1 px-5 text-(--gray-600) leading-[143%] text-sm font-medium bg-(--gray-200) rounded-xl">{work.tags.tag2}</div>
										<div className="py-1 px-5 text-(--gray-600) leading-[143%] text-sm font-medium bg-(--gray-200) rounded-xl">{work.tags.tag3}</div>
										<div className="py-1 px-5 text-(--gray-600) leading-[143%] text-sm font-medium bg-(--gray-200) rounded-xl">{work.tags.tag3}</div>
										<div className="py-1 px-5 text-(--gray-600) leading-[143%] text-sm font-medium bg-(--gray-200) rounded-xl">{work.tags.tag3}</div>
									</div>
									<img src={work.icon} alt="" />
								</div>
							</div>
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Work;


