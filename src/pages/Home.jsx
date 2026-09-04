import About from "../section/About";
import Contact from "../section/Contact";
import Footer from "../section/Footer";
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
			<Footer/>
		</section>
	 );
}
export default Home;
