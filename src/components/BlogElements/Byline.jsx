import React from "react";

function Byline({ byline }) {
	return (
		<div className="byline">
			<p>By</p>
			<p>{byline}</p>
		</div>
	);
}

export default Byline;
