import React from "react";
import SearchFormTemplate from "../../template/component/search-form.tpl"
import ValidationUtil from "../../util/ValidationUtil";

export default class SearchForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchKeyword: "",
			errorMessage: null,
		};

		this.validationUtil = new ValidationUtil();
	}

	handleChange = (e) => {
		this.setState({
			searchKeyword: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const { searchKeyword } = this.state;
		const { onSearch } = this.props;

		if (!this.validationUtil.validateSearchInput(searchKeyword)) {
			this.setState({ errorMessage: "Please enter a keyword (max 512 characters)" });
		} else {
			this.setState({ errorMessage: null });
			onSearch(searchKeyword);
		}
	};

	handleClearSearch = () => {
		this.setState({ searchKeyword: ""});
		this.props.handleClearSearchResults();
	};

	render() {
		const props = {
			handleSubmit: this.handleSubmit,
			searchKeyword: this.state.searchKeyword,
			handleChange: this.handleChange,
			errorMessage: this.state.errorMessage,
			handleClearSearch: this.handleClearSearch
		}

		return (
			<SearchFormTemplate {...props} />
		);
	}
}
