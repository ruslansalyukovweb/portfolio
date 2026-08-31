import { NavLink } from "react-router";

const Navbar = () => {
	return (
		<div className="container pt-6.75! mb-[158px]!">
			<nav className="flex justify-end">
				<ul className="flex items-center gap-8.25 text-[20px] font-medium">
					<NavLink to={'/'}><li className="cursor-pointer">Home</li></NavLink>
					<NavLink to={'/works'}><li className="cursor-pointer">Works</li></NavLink>
					<NavLink to={'/blog'}><li className="cursor-pointer">Blog</li></NavLink>
					<NavLink to={'/contact'}><li className="cursor-pointer">Contact</li></NavLink>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;
