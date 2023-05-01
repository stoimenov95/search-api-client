import React from "react";
import { searchAction } from "../../action/searchAction";
import HomepageTemplate from "../../template/page/homepage.tpl"

export default class HomepageComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
			showLoadingAnimation: false,
			noResultsFound: false
		};

		this.handleSearchResult = this.handleSearchResult.bind(this);
	}

	handleSearchResult(searchResult) {
		if (searchResult && searchResult.length > 0) {
			this.setState({ posts: searchResult });
		}
	}

	handleSearch = async (searchKeyword) => {
		this.setState({ showLoadingAnimation: true });
		searchAction.search(searchKeyword).then((data) => {
			if (data && data.length > 0) {
				this.setState({ posts: data, showLoadingAnimation: false });
			} else {
				this.setState({ posts: [], showLoadingAnimation: false, noResultsFound: true });
			}
		});
	};

	handleClearSearchResults = () => {
		if (this.state.posts && this.state.posts.length > 0) {
			this.setState({ posts: [], showLoadingAnimation: false, noResultsFound: false });
		}
	};

	render() {
		const props = {
			posts: this.state.posts,
			handleSearch: this.handleSearch,
			handleClearSearchResults: this.handleClearSearchResults,
			showLoadingAnimation: this.state.showLoadingAnimation,
			noResultsFound: this.state.noResultsFound
		}
		return (
			<HomepageTemplate {...props}/>
		);
	}
}
