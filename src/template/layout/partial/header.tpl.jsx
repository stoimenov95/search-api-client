import React from "react";
import {NavLink} from "react-router-dom";
import { ROUTES } from "../../../config/constant";

export default class HeaderTemplate extends React.Component {
	render() {
		return (
			<header className="header">
				<div className="header-container">
					<NavLink to={ROUTES.HOME} className={'logo'} key={'homeLinkLogo'} title={'SearchAPI'}>
						<div className="logo">SearchAPI</div>
					</NavLink>
					<nav className={"nav"}>
						<NavLink to={ROUTES.HOME} className={'nav-link'} key={'homeLink'} title={'Home'}>Home</NavLink>
						<NavLink to={ROUTES.ABOUT} className={'nav-link'} key={'aboutLink'} title={'About'}>About</NavLink>
					</nav>
				</div>
			</header>
		);
	}
}
