import React from "react";

export default class MainWrapperTemplate extends React.Component {
	render() {
		return (
			<main className={"mainWrap"} id={"mainWrap"} key={'mainWrap'}>
				<div id={'mainContainer'} className={'container'}>
					{this.props.mainContent}
				</div>
			</main>
		);
	}
}