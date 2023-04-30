import React from "react";

import ContainerTemplate from "../../template/layout/container.tpl"

export default class Container extends React.Component {

	render() {
		return (
			<ContainerTemplate mainContent={this.props.children}/>
		);
	}
}
