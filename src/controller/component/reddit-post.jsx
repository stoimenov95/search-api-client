import React from "react";
import ValidationUtil from "../../util/ValidationUtil";
import RedditPostTemplate from "../../template/component/reddit-post.tpl.jsx";

export default class RedditPost extends React.Component {

	constructor() {
		super();

		this.validationUtil = new ValidationUtil();
		this.fallbackImage = "https://via.placeholder.com/120x120.png?text=No+Image";
	}
	
	render() {

		let displayThumbnail = this.props.post.thumbnail && this.validationUtil.isImgUrl(this.props.post.thumbnail) ? this.props.post.thumbnail : 
			(this.props.preview?.images?.[0]?.source?.url && this.validationUtil.isImgUrl(this.props.preview.images[0].source.url) ? 
			this.props.preview.images[0].source.url : "");

		const props = {
			author: this.props.post.author,
			title: this.props.post.title,
			selftext: this.props.post.selftext,
			url: this.props.post.url,
			fallbackImage: this.fallbackImage,
			displayThumbnail: displayThumbnail
		}

		return (
            <RedditPostTemplate {...props}/>
        )
	}
}
