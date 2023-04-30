import React from "react";
import AppTemplate from "./App.tpl";

export default class AppComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			tpl: '',
		};
	}

	componentDidMount() {
		this.setState({tpl: <AppTemplate props={this.props}/>});
	}

	render() {
        return (
            this.state.tpl
        );
    }
}