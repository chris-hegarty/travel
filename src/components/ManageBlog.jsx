import { logDOM } from "@testing-library/react";
import React, { useContext, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import { BlogCard } from "./BlogCard";

function ManageBlog() {
	const {
		headline,
		setHeadline,
		date,
		setDate,
		// authorImage,
		// setAuthorImage,
		byline,
		setByline,
		// blogImage,
		// setBlogImage,
		// createPost,
		blogPosts,
		setBlogPosts,
		isStarClicked,
		setIsStarClicked,
		rating,
		setRating,
		viewsNumber,
		setViewsNumber,
		commentsNumber,
		setCommentsNumber,
		posts,
		setPosts,
		addPost,
		clearState,
		// createPost,
	} = useContext(BlogContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		addPost();
	};

	return (
		<>
			<div className="flex center">
				<p>Create a Blog Post</p>
			</div>
			<section className="blog-form">
				<form>
					<div className="columns-wrap flex center">
						<div className="left-column">
							<div className="create-field flex column">
								<label htmlFor="c-headline">Headline</label>
								<input
									value={headline}
									onChange={(e) => {
										setHeadline(e.target.value);
									}}
									id="c-headline"
									type="text"
								/>
							</div>
							<div className="create-field flex column">
								<label htmlFor="c-date">Date</label>
								<input
									value={date}
									onChange={(e) => {
										setDate(e.target.value);
									}}
									id="c-date"
									type="date"
								/>
							</div>
							<div className="create-field flex column">
								<label htmlFor="c-headline">Author</label>
								<input
									value={byline}
									onChange={(e) => {
										setByline(e.target.value);
									}}
									id="c-headline"
									type="text"
								/>
							</div>
						</div>
						{/* <div className="right-column">
							<div className="create-field flex column">
								<label htmlFor="c-image">Featured Image:</label>
								<input
									value={blogImage}
									type="file"
									id="c-image"
									name="image-upload"
								/>
								<button
									onClick={(e) => {
										e.preventDefault();
										setBlogImage(e.target.value);
									}}
								>
									Upload
								</button>
							</div>
							<div className="create-field flex column">
								<label htmlFor="author-image">Author Image:</label>
								<input
									value={authorImage}
									type="file"
									id="author-image"
									name="author-image-upload"
								/>
								<button
									onClick={(e) => {
										e.preventDefault();
										setAuthorImage(e.target.value);
									}}
								>
									Upload
								</button>
							</div>
						</div> */}
					</div>
					<div className="publish create-field flex column">
						<button type="submit" onClick={handleSubmit}>
							PUBLISH
						</button>
					</div>
				</form>
			</section>
		</>
	);
}

export default ManageBlog;
