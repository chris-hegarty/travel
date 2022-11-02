import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";

function Menu(props) {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const navigate = useNavigate();
	return (
		<>
			<header>
				<nav className="header-nav flex center align-center space-between">
					<div className="logo-container">
						<picture>
							<NavLink to="/home" className="header-search-icon">
								<img
									src="../../OSM-assets/WordmarkBlack.svg"
									alt="OneStaff logo."
									className="header-logo"
								/>
							</NavLink>
						</picture>
					</div>
					<div className="top-menu-items-desktop flex center desktop">
						<ul className="flex">
							<li>
								<NavLink to="/traveljobs">Travel Jobs</NavLink>
							</li>
							<li>
								<NavLink to="/benefits">Benefits</NavLink>
							</li>
							<li>
								<NavLink to="/about">About</NavLink>
							</li>
							<li>
								<NavLink to="/blogpage">Blog</NavLink>
							</li>
							<li>
								<NavLink className="header-search-icon">{BsSearch}</NavLink>
							</li>
						</ul>
					</div>
					{/* --------------Begin Mobile menu list items------------------  */}
					<div
						className={
							isNavOpen
								? "top-menu-items-mobile mobile expanded"
								: "top-menu-items-mobile mobile"
						}
					>
						<ul className="">
							<li>
								<NavLink to="/traveljobs">Travel Jobs</NavLink>
							</li>
							<li>
								<NavLink to="/benefits">Benefits</NavLink>
							</li>
							<li>
								<NavLink to="/about">About</NavLink>
							</li>
							<li>
								<NavLink to="/blogpage">Blog</NavLink>
							</li>
							<li>
								<NavLink className="header-search-icon">{BsSearch}</NavLink>
							</li>
						</ul>
					</div>
					{/* ---------- End mobile menu list items ----------------  */}
					<button
						className="user-circle flex flex-end"
						onClick={(e) => {
							e.preventDefault();
							navigate("/manage");
						}}
					>
						<IconContext.Provider
							value={{
								className: "user-icon",
								size: "2.5rem",
							}}
						>
							<FaUserCircle />
						</IconContext.Provider>
					</button>
					{/* Mobile menu icon:  */}
					<button
						className="nav-icons open hamburger mobile"
						onClick={(e) => {
							e.preventDefault();
							setIsNavOpen(!isNavOpen);
						}}
					>
						<IconContext.Provider
							value={{
								color: "#444a53",
								className: "open-icon",
							}}
						>
							<FaBars />
						</IconContext.Provider>
					</button>
				</nav>
			</header>
		</>
	);
}

export default Menu;
