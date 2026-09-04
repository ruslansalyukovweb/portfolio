import mail from './../../public/mail.svg'
import github from './../../public/github.svg'
import phone from './../../public/phone.svg'

import { Link } from 'react-router';

const Contact = () => {
	return (
		<section className="container py-16! md:py-20!">
			<div className="text-center bg-(--gray-200) w-max m-auto rounded-xl py-1 px-3 mb-4">
				<h2 className="text-[14px] leading-[143%] text-(--gray-600) font-medium">Get in touch</h2>
			</div>
			<p className="text-center text-[20px] leading-[140%] text-(--gray-600) mb-7 md:mb-12 max-w-xl m-auto">What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
			<div className="flex items-center justify-center gap-5 mb-1 sm:mb-4.5">
				<img src={mail} alt="icon mail" />
				<a href='mailto:ruslansalyukovtr@gmail.com' className='text-[18px] sm:text-[36px] leading-[111%] text-(--gray-900) font-semibold'>ruslansalyukovtr@gmail.com</a>
			</div>
			<div className="flex items-center justify-center gap-5 mb-12">
				<img src={phone} alt="icon phone" />
				<a href="tel:+79968026581" className='text-[18px] sm:text-[36px] leading-[111%] text-(--gray-900) font-semibold'>+79968026581</a>
			</div>
			<p className='text-(--gray-600) text-center mb-2'>You may also find me on these platforms!</p>
			<Link to="https://github.com/ruslansalyukovweb" title="GitHub" className="block w-max m-auto" target="_blank"><img src={github} alt="" /></Link>
		</section>
	);
}

export default Contact;
