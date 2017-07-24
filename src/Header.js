import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';
import './timeline.css';

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchVisible: false
		}
	}

	//  Toggle search box visibility
	showSearch() {
		this.setState({
			searchVisible: !this.state.searchVisible
		})
	}

	handleSearch(val) {
		//  Result when we receive search field data back from
		//  the SearchForm
		console.log("handleSearch: " + val)
		this.props.onSearch(val);
	}

	submitForm(val) {
		this.props.onSearch(val);
	}

	render() {
		//  Classes for the <input /> element
		//  The standard one
		let searchInputClasses = ["searchInput"];

		//  Add this one if it is supposed to be visible
		if (this.state.searchVisible) {
			searchInputClasses.push("active");
		}

		return (
			<div className="header">
				<div className="menuIcon">
          			<div className="dashTop"></div>
          			<div className="dashBottom"></div>
          			<div className="circle"></div>
        		</div>
        		<span className="title">
					{this.props.title}
				</span>
				<SearchForm 
					searchVisible={this.state.searchVisible}
				 	onSubmit={this.handleSearch.bind(this)}
				 />
		    	
		    	{/*  Onclick handler will toggle the searchVisible field */}
		    	<div 
		    		onClick={this.showSearch.bind(this)}
		    		className="fa fa-search searchIcon">
		    	</div>	
    		</div>
		)
	}
}

Header.propTypes = {
	onSearch: PropTypes.func
}

export default Header;
