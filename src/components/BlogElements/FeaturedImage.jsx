import React from "react";

function FeaturedImage() {
	return (
		<>
			<picture className="featured-img-container">
				<img
					src="../../../images/three-margaritas.jpg"
					alt="A variety of margaritas."
					className="featured-image"
				/>
			</picture>
		</>
	);
}

export default FeaturedImage;
