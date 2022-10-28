import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
	const year = new Date().getFullYear();
	return (
		<>
			<footer>
				<div>
					<h2 className="footer-headline">We. Are. OneStaff.</h2>
				</div>
				<nav>
					<div className="footer-column">
						<h3>Overview</h3>
						<ul>
							<li>
								<NavLink to="#">Home</NavLink>
							</li>
							<li>
								<NavLink to="#">Benefits</NavLink>
							</li>
							<li>
								<NavLink to="#">About</NavLink>
							</li>
							<li>
								<NavLink to="#">Blog</NavLink>
							</li>
							<li>
								<NavLink to="#">New Travel Nurse</NavLink>
							</li>
						</ul>
					</div>
					<div className="footer-column">
						<h3>Explore</h3>
						<ul>
							<li>
								<NavLink to="#">Travel Jobs</NavLink>
							</li>
							<li>
								<NavLink to="#">Careers</NavLink>
							</li>
							<li>
								<NavLink to="#">OSM Jobs</NavLink>
							</li>
							<li>
								<NavLink to="#">Refer a Friend</NavLink>
							</li>
							<li>
								<NavLink to="#">Full Application</NavLink>
							</li>
						</ul>
					</div>
					<div className="footer-column">
						<h3>Follow</h3>
						<ul>
							<li>
								<img src="" alt="" />
								<NavLink to="#">Instagram</NavLink>
							</li>
							<li>
								<img src="" alt="" />
								<NavLink to="#">Facebook</NavLink>
							</li>
							<li>
								<img src="" alt="" />
								<NavLink to="#">Twitter</NavLink>
							</li>
							<li>
								<img src="" alt="" />
								<NavLink to="#">TikTok</NavLink>
							</li>
							<li>
								<img src="" alt="" />
								<NavLink to="#">LinkedIn</NavLink>
							</li>
						</ul>
					</div>

					<div className="footer-column">
						<h3>Seals of Approval</h3>
						<ul>
							<li>
								<img src="" alt="" />
								<NavLink to="#">Joint Commission</NavLink>
							</li>
							<li>
								<img src="" alt="" />
								<NavLink to="#">Minority Business Enterprise</NavLink>
							</li>
						</ul>
					</div>
				</nav>
				<div>
					<p>
						Site Hosted by OneStaffMedical.com&#174; &copy; Copyright by: One
						Staff Medical {year}. <NavLink to="#">Privacy Statement</NavLink> |
						<NavLink to="#">Terms of Use</NavLink>. All Rights Reserved.
					</p>
				</div>
			</footer>
		</>
	);
}

export default Footer;
