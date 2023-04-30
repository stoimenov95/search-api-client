import React from "react";
import { ROUTES } from "../../config/constant";
import { Link } from "react-router-dom";

export default class NotFoundTemplate extends React.Component {
	render() {
		return (
			<div className="aboutPage">
				<h1>404 - NOT FOUND</h1>
				<p>
					Did you get lost? Let&apos;s get you back <Link to={ROUTES.HOME}>on track.</Link>
				</p>
			</div>
		);
	}
}