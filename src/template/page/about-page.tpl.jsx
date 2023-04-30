import React from "react";

export default class AboutTemplate extends React.Component {
	render() {
		return (
			<div className="aboutPage">
				<h1>About</h1>
				<p>
					A Reddit SearchAPI for fetching posts from Reddit.
				</p>
			</div>
		);
	}
}