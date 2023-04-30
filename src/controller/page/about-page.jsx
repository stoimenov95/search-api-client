import React from "react";
import AboutTemplate from "../../template/page/about-page.tpl.jsx"


export default class AboutComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<AboutTemplate />
		);
	}
}
