import React from "react";
import MainWrapperTemplate from "../../../template/layout/partial/main-wrapper.tpl";

export default class MainWrapper extends React.Component {
	render() {
		return (
			<MainWrapperTemplate mainContent={this.props.mainContent}/>
		);
	}
}