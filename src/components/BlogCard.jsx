import React, { useState, useContext } from "react";
import FeaturedImage from "./BlogElements/FeaturedImage";
import Stars from "./BlogElements/Stars";
// import Headline from "./BlogElements/Headline";
import ViewsCounter from "./BlogElements/ViewsCounter";
import CommentsCounter from "./BlogElements/CommentsCounter";
import AuthorImage from "./BlogElements/AuthorImage";
import Byline from "./BlogElements/Byline";
import Date from "./BlogElements/Date";
import { BlogContext } from "../context/BlogContext";
import { ManageBlog } from "./ManageBlog";

function BlogCard({ post }) {
	// const {
	// 	post,
	// 	headline,
	// 	setHeadline,
	// 	date,
	// 	setDate,
	// 	// authorImage,
	// 	// setAuthorImage,
	// 	byline,
	// 	setByline,
	// 	// blogImage,
	// 	// setBlogImage,
	// 	// createPost,
	// 	blogPosts,
	// 	setBlogPosts,
	// 	isStarClicked,
	// 	setIsStarClicked,
	// 	rating,
	// 	setRating,
	// 	viewsNumber,
	// 	setViewsNumber,
	// 	commentsNumber,
	// 	setCommentsNumber,
	// 	posts,
	// 	setPosts,
	// } = useContext(BlogContext);

	return (
		<>
			<h4>{post.headline}</h4>
		</>
	);

	// <article className="blog-card">
	// 	<div className="featured-image-container">
	// 		<FeaturedImage />
	// 	</div>
	// 	<div className="stars">
	// 		<Stars />
	// 	</div>

	// 	<h4>{posts.headline}</h4>

	// 	<div className="counters">
	// 		<ViewsCounter />
	// 		<CommentsCounter />
	// 	</div>
	// 	<div className="author-section">
	// 		<div className="author-image-container">
	// 			<AuthorImage />
	// 		</div>
	// 		<div className="author-date-stack">
	// 			<Byline byline={byline} />
	// 			<Date date={date} />
	// 		</div>
	// 	</div>
	// </article>
}

export default BlogCard;
