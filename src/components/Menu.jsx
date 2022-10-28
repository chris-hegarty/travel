import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

function Menu() {
	return (
		<>
			<nav>
				<div>
					<picture>
						<img src="" alt="" />
					</picture>
				</div>
				<div>
					<ul>
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
							<NavLink>{BsSearch}</NavLink>
						</li>
					</ul>
				</div>
				<div>{FaUserCircle}</div>
			</nav>
		</>
	);
}

export default Menu;
