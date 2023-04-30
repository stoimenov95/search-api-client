import React from "react";
import RedditPostsTemplate from "../../template/component/reddit-posts.tpl";

export default class RedditPosts extends React.Component {

	render() {
		return (
			<RedditPostsTemplate {...this.props}/>
		);
	}
}
