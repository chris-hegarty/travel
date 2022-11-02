import React from "react";
import { FaRegEye } from "react-icons/fa";
import { IconContext } from "react-icons";

function ViewsCounter() {
	return (
		<div className="views-container">
			<div className="views-icon">
				<FaRegEye />
			</div>
			<div>
				<p className="views-number">244</p>
			</div>
		</div>
	);
}

export default ViewsCounter;
