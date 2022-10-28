import React from "react";
import { FaRegEye } from "react-icons/fa";
import { FiStar } from "react-icons/fa";

function BlogCard() {
	return (
		<article>
			<img src="" alt="" />
			<div>
				<span>{FiStar}</span>
				<span>{FiStar}</span>
				<span>{FiStar}</span>
				<span>{FiStar}</span>
				<span>{FiStar}</span>
				<span></span>
			</div>
			<h4>Blog Title</h4>
			{/* views, comments here  */}
			<div className="author-component">
				<img src="" alt="" />
				<div>
					<h5>By Author</h5>
					<h5>Date</h5>
				</div>
			</div>
		</article>
	);
}

export default BlogCard;
