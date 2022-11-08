import React from "react";
import moment from "moment";

function Date({ date }) {
	const blogDate = moment(date).format("d MMM YYYY");
	return (
		<div className="blog-date">
			<p>{blogDate}</p>
		</div>
	);
}

export default Date;
