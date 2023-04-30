import React from "react";
import RedditPost from "../../controller/component/reddit-post";
import LoadingSpinnerTemplate from "./loading-spinner.tpl";

export default class RedditPostsTemplate extends React.Component {

	render() {
		const { posts, showLoadingAnimation, noResultsFound } = this.props;
		let redditPosts = [];
		if (Object.keys(posts).length !== 0) {
			for (let key in posts) {
				// eslint-disable-next-line no-prototype-builtins
				if (!posts.hasOwnProperty(key)) continue;
				let post = posts[key];
				redditPosts.push(
					<RedditPost key={post.id} post={post} />
				);
			}
		} else if (noResultsFound) {
			redditPosts.push(
				<div className={"no-results"} key={'no-results'}>
					No results were found, please try another keyword.
				</div>
			);
		}

		return (
			<div className={"reddit-posts"}>
				{redditPosts}
                <LoadingSpinnerTemplate className={showLoadingAnimation ? '' : 'hidden'} key={'loadingAnimation'}/>
			</div>
		);
	}
}
