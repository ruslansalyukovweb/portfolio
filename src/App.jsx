import Navbar from "./components/Navbar"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router"
import Works from "./pages/Works"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import RootLayout from "./layout/RootLayout"
import Home from "./pages/Home"


function App() {

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Home />} />
				<Route path="/works" element={<Works />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/contact" element={<Contact />} />
			</Route>
		)
	)
	return (
		<div className="">
			{/* <Navbar />
			<Routes>
				<Route path="/works" element={<Works />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/contact" element={<Contact />} />
			</Routes> */}
			<RouterProvider router={router} />
		</div>
	)

}

export default App
