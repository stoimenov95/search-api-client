import React from "react";


export default class SearchFormTemplate extends React.Component {
	render() {
		const { handleSubmit, searchKeyword, handleChange, handleClearSearch, errorMessage } = this.props;

		return (
			<div className={"search-form-wrapper"}>
				<form className={"search-form"} onSubmit={handleSubmit}>
					<div className={"search-wrapper"}>
						<input type={"text"} className={"search-input"} placeholder={"Enter a keyword..."} value={searchKeyword} onChange={handleChange} />
						{searchKeyword && <button type={"button"} className={"search-clear-button"} onClick={handleClearSearch}>X</button>}
						<button type={"submit"} className={"search-button"}>
							<span>Search</span>
						</button >
					</div>
					{errorMessage && <p className={"error-message"}>{errorMessage}</p>}
				</form>
			</div>
		);
	}
}
