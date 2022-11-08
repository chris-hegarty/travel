import React, { useState, createContext } from "react";
import nextId from "react-id-generator";

export const BlogContext = createContext();

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
	const [posts, setPosts] = useState([]);

	const addPost = (
		headline,
		date,
		byline,
		rating,
		isStarClicked,
		viewsNumber,
		commentsNumber,
	) => {
		setPosts([
			...posts,
			{
				headline,
				date,
				byline,
				rating,
				isStarClicked,
				viewsNumber,
				commentsNumber,
				id: nextId(),
			},
		]);
	};

	const removePost = (id) => {
		setPosts(posts.filter((post) => post.id !== id));
	};

	const clearState = () => {
		setHeadline("");
		setDate("");
		setByline("");
		setRating("");
		setIsStarClicked("");
		setViewsNumber("");
		setCommentsNumber("");
	};

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
				posts,
				setPosts,
				addPost,
				removePost,
				clearState,
			}}
		>
			{props.children}
		</BlogContext.Provider>
	);
}

// props.children refers to the children that the provider component wraps.
