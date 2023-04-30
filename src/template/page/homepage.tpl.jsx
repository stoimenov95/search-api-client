import React from "react";
import SearchForm from "../../controller/component/search-form";
import RedditPosts from "../../controller/component/reddit-posts";

export default class HomepageTemplate extends React.Component {
	render() {
		const { posts, showLoadingAnimation, handleSearch, handleClearSearchResults, noResultsFound } = this.props;
		return (
			<div className="homepage">
				<SearchForm onSearch={handleSearch} handleClearSearchResults={handleClearSearchResults}/>
				<RedditPosts posts={posts} showLoadingAnimation={showLoadingAnimation} noResultsFound={noResultsFound} />
			</div>
		);
	}
}
