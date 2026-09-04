import { NavLink } from "react-router";
import { navlinks } from "../data/navlinks";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import buttonDark from '../../public/button-dark.svg'
import buttonLight from '../../public/button-light.svg'
import menuOpen from '../../public/menu.svg'
import closeMenu from '../../public/close-menu.svg'

const Navbar = () => {

	const [toggleTheme, setToggleTheme] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="py-5! sticky top-0 bg-white/95">
			<div className="container ">
				{/* desktop navbar*/}
				<nav className="flex items-center justify-between">
					<a href="/" className="text-[20px]">Logo</a>
					<div className="flex items-center gap-5">
						<ul className="hidden md:flex flex-row items-center text-(--gray-600) gap-8.25 font-medium border-r border-(--gray-100) pr-6">
							{navlinks.map((link) => {
								return <li key={link.to}>
									<NavLink className='hover:bg-(--gray-100) p-2 rounded-full duration-200' to={link.to}>{link.name}</NavLink>
								</li>
							})}
							{/* <NavLink to={'/'}><li className="cursor-pointer">Home</li></NavLink>
					<NavLink to={'/works'}><li className="cursor-pointer">Works</li></NavLink>
					<NavLink to={'/blog'}><li className="cursor-pointer">Blog</li></NavLink>
					<NavLink to={'/contact'}><li className="cursor-pointer">Contact</li></NavLink> */}
						</ul>
						<AnimatePresence mode="wait">
							<motion.button key={toggleTheme} initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 5 }} onClick={() => setToggleTheme(!toggleTheme)}>{toggleTheme ? <img src={buttonDark} /> : <img src={buttonLight} />}</motion.button>
						</AnimatePresence>
						<button className="md:hidden relative z-50" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <img src={closeMenu}></img> : <img src={menuOpen}></img>}</button>
					</div>
				</nav>

				{/* mobile nav */}

				<AnimatePresence mode="wait">
					{isOpen && (
						<nav>
							<motion.ul initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 35 }} exit={{ opacity: 0, x: 100 }} transition={{ duration: 0.4 }} className="flex flex-col items-center ml-auto rounded-2xl inset-x-5 fixed gap-10 border border-(--gray-200) mt-15 p-6 w-30 backdrop-blur-sm bg-(--gray-100)/10">
								{navlinks.map((link) => {
									return <li key={link.to} className="relative z-50">
										<NavLink
											className='hover:bg-(--gray-100) p-2 rounded-full duration-200'
											to={link.to}
											onClick={() => setIsOpen(false)}
										>
											{link.name}
										</NavLink>
									</li>
								})}
								<button className="font-medium rounded-sm p-2 duration-200 bg-(--gray-900) text-(--gray-50)">Download Resume</button>
							</motion.ul>
						</nav>
					)}
				</AnimatePresence>
			</div>
		</div >
	);
}

export default Navbar;


