import React from "react";

class ValidationUtil extends React.Component {
	validateSearchInput = (input) => {
		if (!input || input.trim() === "" || input.length > 512) {
			return false;
		}
		return true;
	};

	validateURL = (url) => {
		try {
			new URL(url);
			return true;
		} catch (_) {
			return false;
		}
	};

	isImgUrl(url) {
		return /\.(jpg|jpeg|png|webp|avif|gif)$/.test(url)
	}

	render() {
		return null;
	}
}

export default ValidationUtil;
