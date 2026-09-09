import { NavLink } from "react-router";
import { navlinks } from "../data/navlinks";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import buttonDark from '../../public/button-dark.svg'
import buttonLight from '../../public/button-light.svg'
import menuOpen from '../../public/menu.svg'
import closeMenu from '../../public/close-menu.svg'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="sticky top-0 z-50 bg-white border-b border-(--gray-200) h-16 flex items-center">
			<div className="container ">
				{/* desktop navbar*/}
				<nav className="flex items-center justify-between">
					<a href="/" className="text-[18px] font-medium">ruslansalyukov.dev</a>
					<ul className="hidden md:flex flex-row items-center text-(--gray-600) gap-10 font-medium border-r bg-(--gray-50) px-4 py-3 rounded-full border-(--gray-100)">
						{navlinks.map((link) => {
							return <li key={link.to}>
								<NavLink className='hover:text-(--gray-900) rounded-full text-sm duration-200' to={link.to}>{link.name}</NavLink>
							</li>
						})}
					</ul>
					<button className="md:hidden relative z-50" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <img src={closeMenu}></img> : <img src={menuOpen}></img>}</button>
				</nav>

				{/* mobile nav */}

				<AnimatePresence mode="wait">
					{isOpen && (
						<motion.nav initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 35 }} exit={{ opacity: 0, x: 100 }} transition={{ duration: 0.4 }} className="flex flex-col rounded-2xl w-40 ml-auto inset-x-12 fixed border border-(--gray-200) mt-10 bg-white">
							<ul className="flex flex-col gap-2 p-4 mb-10">
								{navlinks.map((link) => {
									return <li key={link.to} className="relative px-3.5 py-2 z-50">
										<NavLink
											className='text-(--gray-600) text-sm font-medium'
											to={link.to}
											onClick={() => setIsOpen(false)}
										>
											{link.name}
										</NavLink>
									</li>
								})}
							</ul>
							<div className="p-4 border-(--gray-200) border-t">
								<button className="w-full font-medium text-sm rounded-sm p-2 duration-200 border border-(--gray-200) text-(--gray-900)">Download CV</button>
							</div>
						</motion.nav>
					)}
				</AnimatePresence>
			</div>
		</div >
	);
}

export default Navbar;


