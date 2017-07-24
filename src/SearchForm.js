import React from 'react';
import PropTypes from 'prop-types';

class SearchForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchText: ''
		}
	}

	updateSearchInput(event) {
		console.log("updateSearchInput called" + event.target.value)
		this.setState({
			searchText: event.target.value
		});
	}

	submitForm(event) {
		//  prevent from reloading the entire page
		event.preventDefault();
		console.log("Form is being submitted");

		//  call the callback func to pass the search data
		//  back to the caller
		this.props.onSubmit(this.state.searchText);
	}

	render() {
		//  Classes for the <input /> element
		//  The standard one
		let searchInputClasses = ["searchInput"];

		//  Add this one if it is supposed to be visible
		if (this.props.searchVisible) {
			searchInputClasses.push("active");
		}

		return (
			<form onSubmit={this.submitForm.bind(this)}>
				<input
					type="search"
					value={this.state.searchText}
					className={searchInputClasses.join(' ')}
					onChange={this.updateSearchInput.bind(this)}
					placeholder="Search ..." />
			</form>
		)
	}
}

SearchForm.propTypes = {
	searchVisible: PropTypes.bool,
	onSubmit: PropTypes.func.isRequired
}

SearchForm.defaultProps = {
	searchVisible: false,
	onSubmit: () => {}  //  prevent issues
}

export default SearchForm