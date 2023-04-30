import React from "react";

export default class FooterTemplate extends React.Component {
	render() {
		return (
			<footer className="footer">
				<div className="footer-container">
					<div className="footer-section">
						<h4>About</h4>
						<ul>
							<li>
								<a href="#">Careers</a>
							</li>
							<li>
								<a href="#">Press</a>
							</li>
							<li>
								<a href="#">Advertise</a>
							</li>
							<li>
								<a href="#">Blog</a>
							</li>
						</ul>
					</div>
					<div className="footer-section">
						<h4>Help</h4>
						<ul>
							<li>
								<a href="#">Reddit Help Center</a>
							</li>
							<li>
								<a href="#">Reddit Premium</a>
							</li>
							<li>
								<a href="#">Reddit Gifts</a>
							</li>
						</ul>
					</div>
					<div className="footer-section">
						<h4>Legal</h4>
						<ul>
							<li>
								<a href="#">Terms</a>
							</li>
							<li>
								<a href="#">Privacy Policy</a>
							</li>
							<li>
								<a href="#">Mod Policy</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="footer-bottom">&copy; {new Date().getFullYear()} Reddit SearchAPI, Inc. All rights reserved.</div>
			</footer>
		);
	}
}
