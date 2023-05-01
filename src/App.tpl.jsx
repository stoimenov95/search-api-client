/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import DynamicImport from "./util/DynamicImport";
import LayoutContainer from "./controller/layout/container";

const HomePage = (props) => (
    <DynamicImport load={() => import('./controller/page/homepage')}>
        {(Component) => Component === null ? <div/> : <Component {...props} />}
    </DynamicImport>
);

const AboutPage = (props) => (
    <DynamicImport load={() => import('./controller/page/about-page')}>
        {(Component) => Component === null ? <div/> : <Component {...props} />}
    </DynamicImport>
);

const NotFoundPage = (props) => (
    <DynamicImport load={() => import('./controller/page/not-found-page')}>
        {(Component) => Component === null ? <div/> : <Component {...props} />}
    </DynamicImport>
);

export default class AppComponent extends React.Component {	
	render () {
		return (
			<Router>
				<LayoutContainer {...this.props}>
					<Routes>
						<Route exact path="/" element={ <HomePage />} />
						<Route path="/about" element={ <AboutPage />} />
						<Route path="/*" element={ <NotFoundPage />} />
					</Routes>
				</LayoutContainer>
			</Router>
		);
	}
}