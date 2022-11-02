import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import { IconContext } from "react-icons";

function CommentsCounter() {
	return (
		<div className="comments-counter">
			<div className="comments-icon">
				<BiMessageDetail />
			</div>
			<div>
				<p className="comments-number">0</p>
			</div>
		</div>
	);
}

export default CommentsCounter;
