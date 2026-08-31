import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router"
import Works from "./pages/Works"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"

function App() {

	return (
		<div className="">
			<Navbar />
			<Routes>
				<Route path="/works" element={<Works/>}/>
				<Route path="/blog" element={<Blog/>}/>
				<Route path="/contact" element={<Contact/>}/>
			</Routes>
		</div>
	)
}

export default App
