import React from "react";
import FeaturedImage from "./BlogElements/FeaturedImage";
import Stars from "./BlogElements/Stars";
import Headline from "./BlogElements/Headline";
import ViewsCounter from "./BlogElements/ViewsCounter";
import CommentsCounter from "./BlogElements/CommentsCounter";
import AuthorImage from "./BlogElements/AuthorImage";
import Byline from "./BlogElements/Byline";
import Date from "./BlogElements/Date";

function BlogCard() {
	return (
		<article className="blog-card">
			<div className="featured-image-container">
				<FeaturedImage />
			</div>
			<div className="stars">
				<Stars />
			</div>
			<h4>
				<Headline />
			</h4>
			<div className="counters">
				<ViewsCounter />
				<CommentsCounter />
			</div>
			<div className="author-section">
				<div className="author-image-container">
					<AuthorImage />
				</div>
				<div className="author-date-stack">
					<Byline />
					<Date />
				</div>
			</div>
		</article>
	);
}

export default BlogCard;
