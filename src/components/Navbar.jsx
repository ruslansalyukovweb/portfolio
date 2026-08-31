import { Link } from "react-router";

const Navbar = () => {
    return (
        <div className="container pt-6.75!">
            <nav>
                <ul className="flex items-center justify-end gap-8.25 text-[20px] font-medium">
                    <Link to={'/works'}><li className="cursor-pointer">Works</li></Link>
                    <Link to={'/blog'}><li className="cursor-pointer">Blog</li></Link>
                    <Link to={'/contact'}><li className="cursor-pointer">Contact</li></Link>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;  