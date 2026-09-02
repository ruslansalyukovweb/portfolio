import { Link, useNavigate } from "react-router";

const PageNotFound = () => {

	const navigate = useNavigate();

	return (
		<div className="flex items-center justify-center min-h-[80vh]">
			<div className="flex flex-col items-center gap-5">
				<p className="text-2xl">404 | Page Not Found</p>
				<Link onClick={() => navigate('/')} ><button className="bg-black text-white p-3 rounded-full animate-pulse">Go to home page</button></Link>
			</div>
		</div>
	);
}

export default PageNotFound;
