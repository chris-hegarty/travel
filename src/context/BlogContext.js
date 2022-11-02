import React, { useState, createContext } from "react";

export const BlogContext = createContext(null);

export function BlogProvider(props) {
	const [blogPosts, setBlogPosts] = useState([]);
	const [blogImage, setBlogImage] = useState(null);
	const [isStarClicked, setIsStarClicked] = useState(false);
	const [rating, setRating] = useState([]);
	const [headline, setHeadline] = useState("");
	const [viewsNumber, setViewsNumber] = useState(0);
	const [commentsNumber, setCommentsNumber] = useState(0);
	const [date, setDate] = useState("");
	const [authorImage, setAuthorImage] = useState(null);
	const [byline, setByline] = useState("");

	function createPost(e) {
		e.preventDefault();
		let newPost = {
			headline: headline,
			date: date,
			byline: byline,
			blogImage: blogImage,
			authorImage: authorImage,
			rating: rating,
			isStarClicked: isStarClicked,
			viewsNumber: viewsNumber,
			commentsNumber: commentsNumber,
		};
		setBlogPosts((curr) => [newPost, ...curr]);

		// After the function is called, reset the form values.

		setHeadline("");
		setDate("");
		setByline("");
		setBlogImage("");
		setAuthorImage("");
	}

	return (
		<BlogContext.Provider
			value={{
				blogPosts,
				setBlogPosts,
				blogImage,
				setBlogImage,
				isStarClicked,
				setIsStarClicked,
				rating,
				setRating,
				headline,
				setHeadline,
				viewsNumber,
				setViewsNumber,
				commentsNumber,
				setCommentsNumber,
				date,
				setDate,
				authorImage,
				setAuthorImage,
				byline,
				setByline,
				createPost,
			}}
		>
			{props.children}
		</BlogContext.Provider>
	);
}
