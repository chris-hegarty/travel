import React from "react";
import BlogCard from "./BlogCard";

function Home() {
	return (
		<>
			<main>
				<div className="hero-image flex center align-center">
					<h1>We. Are. OneStaff.</h1>
				</div>
				<section className="content home-content">
					<div className="flex column center align-center">
						<h2>Why Travel With Us?</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et dolore magna
							aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
							dolor in reprehenderit in voluptate velit esse cillum dolore eu
							fugiat nulla pariatur.
						</p>
					</div>
					<section className="travel-friends">
						<div className="friends-col-1">
							<img src="../../images/friends.webp" alt="" />
						</div>
						<div className="friends-col-2">
							<h3>Travel with Your Friends</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
								eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
								metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
								interdum tellus elit sed risus. Maecenas eget condimentum velit,
								sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
								torquent per conubia nostra, per inceptos himenaeos. Praesent
								auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
								Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
								urna. Curabitur vel bibendum lorem. Morbi convallis convallis
								diam sit amet lacinia. Aliquam in elementum tellus.
							</p>
							<button>Refer Someone Now!</button>
						</div>
					</section>
				</section>
				<section className="blog-row">
					{/* Ideally, we dynamically map through and output three BlogCard components with the three latest blog
					posts here. */}
					<div className="flex center">
						<h2>Check Out Our Blog</h2>
					</div>
					{<BlogCard />}
				</section>
			</main>
		</>
	);
}

export default Home;
