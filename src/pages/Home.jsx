import About from "../section/About";
import Contact from "../section/Contact";
import Header from "../section/Header";
import Skills from "../section/Skills";
import Work from "../section/Work";

const Home = () => {
	return (
		<section className="">
			<Header/>
			<About/>
			<Skills/>
			<Work/>
			<Contact/>
			<div className="min-h-screen"></div>
			<div className="min-h-screen"></div>
			<div className="min-h-screen"></div>
			<div className="min-h-screen"></div>
			<div className="min-h-screen"></div>
			<div className="min-h-screen"></div>
		</section>
	 );
}
export default Home;
