import React from "react";
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";

function Stars() {
	return (
		<>
			<div className="rating-container">
				<FaStar></FaStar>
				<FaStar></FaStar>
				<FaStar></FaStar>
				<FaStar></FaStar>
				<FaStar></FaStar>
			</div>
		</>
	);
}

export default Stars;
