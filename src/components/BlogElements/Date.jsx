import React from "react";
import moment from "moment";

function Date() {
	const date = moment().format("d MMM YYYY");
	return (
		<div className="blog-date">
			<p>{date}</p>
		</div>
	);
}

export default Date;
