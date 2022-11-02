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
							alt="OneStaff Medical Waves logo."
						/>
					</span>
					<h2 className="footer-h2">We. Are. OneStaff.</h2>
				</div>
				<nav className="flex center footer-nav">
					<div className="footer-column no-mobile">
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
					<div className="footer-column no-mobile">
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
					<div className="footer-column has-logos socials desktop-socials">
						<h3>Follow</h3>
						<ul>
							<li>
								<NavLink to="#" className="flex align-center">
									{" "}
									<img
										src="../../social-icons/Instagram_Glyph_Gradient.png"
										alt="Instagram logo"
										width="24px"
									/>
									Instagram
								</NavLink>
							</li>
							<li>
								<NavLink to="#" className="flex align-center">
									{" "}
									<img
										src="../../social-icons/f_logo_RGB-Blue_512.png"
										alt="Facebook logo"
										width="24px"
									/>
									Facebook
								</NavLink>
							</li>
							<li>
								<NavLink to="#" className="flex align-center">
									{" "}
									<img
										src="../../social-icons/2021 Twitter logo - blue.png"
										alt="Twitter logo"
										width="24px"
									/>
									Twitter
								</NavLink>
							</li>
							<li>
								<NavLink to="#" className="flex align-center">
									{" "}
									<img
										src="../../social-icons/TikTok_Icon_Black_Circle.png"
										alt="TikTok logo"
										width="24px"
									/>
									TikTok
								</NavLink>
							</li>
							<li>
								<NavLink to="#" className="flex align-center">
									{" "}
									<img
										src="../../social-icons/In-Blue-128.png"
										alt="LinkedIn logo"
										width="24px"
									/>
									LinkedIn
								</NavLink>
							</li>
						</ul>
					</div>
					{/* -------------Begin Mobile logo row:------------  */}

					<div className="footer-column has-logos mobile-socials">
						<h3>Follow</h3>
						<ul>
							<li>
								<NavLink to="#" className="flex align-center">
									{" "}
									<img
										src="../../social-icons/Instagram_Glyph_Gradient.png"
										alt="Instagram logo"
										width="24px"
									/>
								</NavLink>
							</li>
							<li>
								<NavLink to="#" className="flex align-center">
									{" "}
									<img
										src="../../social-icons/f_logo_RGB-Blue_512.png"
										alt="Facebook logo"
										width="24px"
									/>
								</NavLink>
							</li>
							<li>
								<NavLink to="#" className="flex align-center">
									{" "}
									<img
										src="../../social-icons/2021 Twitter logo - blue.png"
										alt="Twitter logo"
										width="24px"
									/>
								</NavLink>
							</li>
							<li>
								<NavLink to="#" className="flex align-center">
									{" "}
									<img
										src="../../social-icons/TikTok_Icon_Black_Circle.png"
										alt="TikTok logo"
										width="24px"
									/>
								</NavLink>
							</li>
							<li>
								<NavLink to="#" className="flex align-center">
									{" "}
									<img
										src="../../social-icons/In-Blue-128.png"
										alt="LinkedIn logo"
										width="24px"
									/>
								</NavLink>
							</li>
						</ul>
					</div>

					<div className="footer-column has-logos no-mobile">
						<h3>Seals of Approval</h3>
						<ul>
							<li className="flex align-center">
								<NavLink to="#" className="flex align-center">
									<img
										src="../../seals-of-approval/Joint-Commission-Accreditation.png"
										alt="Joint Commission Accreditation logo"
										width="24px"
									/>
									Joint Commission
								</NavLink>
							</li>
							<li className="flex align-center">
								<NavLink to="#" className="flex align-center">
									<img
										src="../../seals-of-approval/MinorityOwnedBusiness-1.jpg"
										alt="Minority Owned Business Enterprise logo"
										width="24px"
									/>
									Minority Business Enterprise
								</NavLink>
							</li>
						</ul>
					</div>
				</nav>
				<div className="copyright-line flex center copyright-desktop">
					<p className="copyright-text">
						Site Hosted by OneStaffMedical.com&#174; &copy; Copyright by: One
						Staff Medical {year}. <NavLink to="#">Privacy Statement</NavLink> |
						<NavLink to="#">Terms of Use</NavLink>. All Rights Reserved.
					</p>
				</div>
				<div className="copyright-line flex center copyright-mobile">
					<p className="copyright-text">
						<NavLink to="#">Privacy Statement</NavLink> |
						<NavLink to="#">Terms of Use</NavLink>
					</p>
				</div>
			</footer>
		</>
	);
}

export default Footer;
