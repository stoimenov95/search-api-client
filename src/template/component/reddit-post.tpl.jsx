import React from "react";

export default class RedditPostTemplate extends React.Component {

	render() {
		const { title, author, selftext, url, displayThumbnail } = this.props;
		return (
			<div className={"reddit-post"}>
				<div className={"post-content"}>
					<h3 className={"post-title"}>{title}</h3>
					<div className={"post-metadata"}>
						<span className={"post-author"}>Posted by u/{author}</span>
					</div>
					<p className={"post-selftext"}>{selftext}</p>
					<a href={url} className={"read-more"} target={"_blank"} rel={"noopener noreferrer"}>
						Read more
					</a>
				</div>
				{displayThumbnail && <img src={displayThumbnail } alt={title} className={"post-image"} />}
			</div>
		);
	}
}
