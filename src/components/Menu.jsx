import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

function Menu() {
	return (
		<>
			<header>
				<nav className="header-nav flex center align-center space-between">
					<div className="logo-container">
						<picture>
							<img
								src="../../OSM-assets/WordmarkBlack.svg"
								alt="OneStaff logo."
								className="header-logo"
							/>
						</picture>
					</div>
					<div className="top-menu-items flex center">
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
					<div className="user-circle flex flex-end">
						<FaUserCircle />
					</div>
				</nav>
			</header>
		</>
	);
}

export default Menu;
