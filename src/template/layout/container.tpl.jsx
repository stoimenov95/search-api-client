import React from "react";

import Header from "../../controller/layout/partial/header";
import MainWrapper from "../../controller/layout/partial/main-wrapper";
import Footer from "../../controller/layout/partial/footer";

export default class ContainerTemplate extends React.Component {

	render() {
		let {mainContent} = this.props;
	
		let template = [
			<div key="background" className="backgroundWrap"></div>,
			<Header key={'header'}/>,
			<MainWrapper key={'mainWrapper'} mainContent={mainContent}/>,
			<Footer key={'footer'}/>
		];

		return ([template]);
	}
}

