import React, { useContext } from "react";
import { BlogContext } from "../../context/BlogContext";

function Headline(props) {
	const { posts } = useContext(BlogContext);
	const { headline } = posts;
	console.log(posts.headline);
	return (
		<>
			<h4>{posts.headline}</h4>
		</>
	);
}

export default Headline;
