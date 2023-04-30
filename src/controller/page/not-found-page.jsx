import React from "react";
import NotFoundTemplate from "../../template/page/not-found-page.tpl.jsx"


export default class NotFoundPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<NotFoundTemplate />
		);
	}
}
