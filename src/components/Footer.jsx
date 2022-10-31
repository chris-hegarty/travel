import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
	const year = new Date().getFullYear();
	return (
		<>
			<footer>
				<div className="flex center align-center footer-headline">
					<span>
						<img
							src="../../OSM-assets/osm-waves-light-logo.png"
							alt="OneStaff Medical Waves photo"
							width="47px"
						/>
					</span>
					<h2 className="footer-h2">We. Are. OneStaff.</h2>
				</div>
				<nav className="flex center footer-nav">
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
					<div className="footer-column has-logos">
						<h3>Follow</h3>
						<ul>
							<li className="flex align-center">
								<img
									src="../../social-icons/Instagram_Glyph_Gradient.png"
									alt="Instagram logo"
									width="24px"
								/>
								<NavLink to="#">Instagram</NavLink>
							</li>
							<li className="flex align-center">
								<img
									src="../../social-icons/f_logo_RGB-Blue_512.png"
									alt="Facebook logo"
									width="24px"
								/>
								<NavLink to="#">Facebook</NavLink>
							</li>
							<li className="flex align-center">
								<img
									src="../../social-icons/2021 Twitter logo - blue.png"
									alt="Twitter logo"
									width="24px"
								/>
								<NavLink to="#">Twitter</NavLink>
							</li>
							<li className="flex align-center">
								<img
									src="../../social-icons/TikTok_Icon_Black_Circle.png"
									alt="TikTok logo"
									width="24px"
								/>
								<NavLink to="#">TikTok</NavLink>
							</li>
							<li className="flex align-center">
								<img
									src="../../social-icons/In-Blue-128.png"
									alt="LinkedIn logo"
									width="24px"
								/>
								<NavLink to="#">LinkedIn</NavLink>
							</li>
						</ul>
					</div>

					<div className="footer-column has-logos">
						<h3>Seals of Approval</h3>
						<ul>
							<li className="flex align-center">
								<img
									src="../../seals-of-approval/Joint-Commission-Accreditation.png"
									alt="Joint Commission Accreditation logo"
									width="24px"
								/>
								<NavLink to="#">Joint Commission</NavLink>
							</li>
							<li className="flex align-center">
								<img
									src="../../seals-of-approval/MinorityOwnedBusiness-1.jpg"
									alt="Minority Owned Business Enterprise logo"
									width="24px"
								/>
								<NavLink to="#">Minority Business Enterprise</NavLink>
							</li>
						</ul>
					</div>
				</nav>
				<div className="copyright-line flex center">
					<p className="copyright-text">
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
